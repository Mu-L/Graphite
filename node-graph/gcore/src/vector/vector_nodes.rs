use super::style::{Fill, FillType, Gradient, GradientType, Stroke};
use super::{ManipulatorPointId, VectorData};
use crate::uuid::ManipulatorGroupId;
use crate::{Color, Node};
use bezier_rs::{Subpath, SubpathTValue};
use glam::{DAffine2, DVec2};

#[derive(Debug, Clone, Copy)]
pub struct SetFillNode<FillType, SolidColor, GradientType, Start, End, Transform, Positions> {
	fill_type: FillType,
	solid_color: SolidColor,
	gradient_type: GradientType,
	start: Start,
	end: End,
	transform: Transform,
	positions: Positions,
}

#[node_macro::node_fn(SetFillNode)]
fn set_vector_data_fill(
	mut vector_data: VectorData,
	fill_type: FillType,
	solid_color: Option<Color>,
	gradient_type: GradientType,
	start: DVec2,
	end: DVec2,
	transform: DAffine2,
	positions: Vec<(f64, Option<Color>)>,
) -> VectorData {
	vector_data.style.set_fill(match fill_type {
		FillType::None | FillType::Solid => solid_color.map_or(Fill::None, Fill::Solid),
		FillType::Gradient => Fill::Gradient(Gradient {
			start,
			end,
			transform,
			positions,
			gradient_type,
		}),
	});
	vector_data
}

#[derive(Debug, Clone, Copy)]
pub struct SetStrokeNode<Color, Weight, DashLengths, DashOffset, LineCap, LineJoin, MiterLimit> {
	color: Color,
	weight: Weight,
	dash_lengths: DashLengths,
	dash_offset: DashOffset,
	line_cap: LineCap,
	line_join: LineJoin,
	miter_limit: MiterLimit,
}

#[node_macro::node_fn(SetStrokeNode)]
fn set_vector_data_stroke(
	mut vector_data: VectorData,
	color: Option<Color>,
	weight: f64,
	dash_lengths: Vec<f32>,
	dash_offset: f64,
	line_cap: super::style::LineCap,
	line_join: super::style::LineJoin,
	miter_limit: f64,
) -> VectorData {
	vector_data.style.set_stroke(Stroke {
		color,
		weight,
		dash_lengths,
		dash_offset,
		line_cap,
		line_join,
		line_join_miter_limit: miter_limit,
	});
	vector_data
}

#[derive(Debug, Clone, Copy)]
pub struct SetResampleCurveNode<Density> {
	density: Density,
}

#[node_macro::node_fn(SetResampleCurveNode)]
fn set_vector_data_resample_curve(mut vector_data: VectorData, density: f64) -> VectorData {
	vector_data.subpaths = vector_data
		.subpaths
		.iter()
		//.map(|subpath| Subpath::new_cubic_spline(subpath.compute_lookup_table(Some((subpath.length(None) / density).round() as usize), Some(TValueType::Euclidean))))
		.map(|subpath| {
			let mut travel = 0.;
			let length = subpath.length(None);
			let mut path: Vec<DVec2> = Vec::new();

			while travel < length {
				path.push(subpath.evaluate(SubpathTValue::GlobalEuclidean(travel / length)));
				travel += density;
			}

			//Subpath::new_cubic_spline(path)

			let mut curve: Subpath<ManipulatorGroupId> = Subpath::new_line(path[0], path[1]);
			let mut last = path[1];

			for anchor in path.iter().skip(2) {
				curve.append_bezier(&Subpath::<ManipulatorGroupId>::new_line(last, *anchor).get_segment(0).unwrap(), bezier_rs::AppendType::SmoothJoin(0.001));
				last = *anchor;
			}

			//lines
			curve
		})
		.collect();
	vector_data
}
