+++
title = "About Graphite"
aliases = ["features"]

[extra]
css = ["/about.css"]
+++

<section class="section-row">
<div class="section">

# About Graphite

Graphite is a community-built, open source [licensed](/license) software project that is free to use for any purpose. If you find Graphite valuable, consider [supporting financially or getting involved](/contribute).

</div>
</section>

<section class="section-row">
<div class="section">

## Project

The idea for Graphite began with a desire to create artwork and edit photos using free software that felt user-friendly and truly modern. Over time, that dream evolved to reconsider what "modern" meant for the landscape of 2D graphics editing. By borrowing concepts popular in 3D software, what could a procedural, nondestructive design tool look like if nothing was too ambitious? Answering that question took years of design exploration, leading to a community of savvy developers volunteering to turn that formidable dream into a reality.

</div>
</section>

<section class="section-row">

<div class="diptych">

<div class="section">

## Mission

Graphite strives to unshackle the creativity of every budding artist and seasoned professional by building the best comprehensive art and design tool that's accessible to all.

Mission success will come when Graphite is an industry standard. A cohesive product vision and prioritizing innovation over imitation will make that possible.

</div>
<div class="section">

## Freedom

As an independent community-driven software project, Graphite will always remain free. It has no investors to answer to. Its founder keeps costs low and relies on [your support](/contribute) while he works full-time bringing Graphite to life. To sustainably grow, the long-term funding model will pair donations with paid accounts that provide optional online services like document storage/syncing and render acceleration via cloud GPUs.

<!-- A batteries-included creative app for every kind of digital artist where -->

<!-- ## Statistics

- [GitHub stars](https://github.com/GraphiteEditor/Graphite/stargazers): <span class="loading-data" data-github-stars></span>
- [Contributors](https://github.com/GraphiteEditor/Graphite/graphs/contributors): <span class="loading-data" data-contributors></span>
- [Code commits](https://github.com/GraphiteEditor/Graphite/commits/master): <span class="loading-data" data-code-commits></span>
- [First line of code](https://github.com/GraphiteEditor/Graphite/commit/bca97cbeff8e38b426cfb410159cb21132062fba): Feb. 14, 2021

<script>
(async () => {
	const response = await fetch("https://api.github.com/repos/graphiteeditor/graphite?per_page=1");
	const json = await response.json();
	const stars = parseInt(json.stargazers_count);
	if (!stars) return;

	document.querySelector("[data-github-stars]").innerText = `${Math.round(stars / 100) / 10}k ⭐`;
})();
(async () => {
	const response = await fetch("https://api.github.com/repos/graphiteeditor/graphite/contributors?per_page=1");
	const link = [...response.headers].find(([header, _]) => header === "link")[1];
	if (!link) return;
	// With one page per contributor, the last past number is the contributor count
	const contributors = parseInt(link.match(/page=(\d+)>; rel="last"/)[1]);
	if (!contributors) return;

	document.querySelector("[data-contributors]").innerText = contributors;
})();
(async () => {
	const response = await fetch("https://api.github.com/repos/graphiteeditor/graphite/commits?per_page=1");
	const link = [...response.headers].find(([header, _]) => header === "link")[1];
	if (!link) return;
	// With one page per commit, the last past number is the commit count
	const commits = parseInt(link.match(/page=(\d+)>; rel="last"/)[1]);
	if (!commits) return;

	document.querySelector("[data-code-commits]").innerText = commits;
})();
</script> -->

</div>

</div>

</section>

<!-- <section id="opener-message" class="section-row">
<div class="section">

## A 2D creative tool made for everyone

With great power comes great accessibility. Graphite is built on the belief that the best creative tools can be powerful and within reach of all, from students to studios.

Graphite is designed with a friendly and intuitive interface where a delightful user experience is of first-class importance. It is available for free under an open source [license](/license) and usable [instantly through a web browser](https://editor.graphite.rs) or an upcoming native client on Windows, Mac, and Linux.

It's easy to learn and teach, yet Graphite's accessible design does not sacrifice versatility for simplicity. The node-based workflow opens doors to an ecosystem of powerful capabilities catering to casual and professional users alike.

</div>
<div class="graphic">
	<img src="https://static.graphite.rs/content/index/brush__2.svg" alt="" />
</div>
</section> -->

<section id="core-team" class="feature-box">
<div class="box">

<h1 class="box-header">Meet the core team</h1>

---

<div class="triptych">

<div class="section">

![Photo of Keavon Chambers](https://files.keavon.com/-/SinfulLightcyanCrocodile/Paper_Portrait_3.png)

## Keavon Chambers <span class="flag" title="American">🇺🇸</span>

*@Keavon*

### Founder

*UI & product design, frontend engineering*

Keavon is a creative generalist with a love for the fusion of arts and technology. Photographer, UX and graphic designer, technical artist, game developer, and everything in-between— he is equal parts designer and engineer. His multidisciplinary background in the digital arts is aptly suited for concocting the unique vision needed to bring Graphite to fruition.

</div>
<div class="section">

![Photo of Dennis Kobert](https://files.keavon.com/-/RewardingPreciousAttwatersprairiechicken/Paper_Portrait_1.png)

## Dennis Kobert <span class="flag" title="German">🇩🇪</span>

*@TrueDoctor*

### Lead Engineer

*Graphene node engine, research, architecture*

Dennis is a mix between a mathematician and a mad scientist. While still enjoying the art of photography and image editing (which drew him to the project early on), he thrives when challenged with designing complex systems and pushing boundaries. His method of building generalized solutions wrapped in elegant layers of abstraction led to his creation of the Graphene engine.

</div>
<div class="section">

![Photo of Hypercube](https://files.keavon.com/-/ConcreteQuarterlyBrownbear/Paper_Portrait_2.png)

## "Hypercube" <span class="flag" title="British">🇬🇧</span>

*@0Hypercube*

### Software Engineer

*Editor systems, nodes, architecture*

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lacus, convallis id gravida eget, condimentum sed enim. Aliquam tellus nulla, aliquam eu ipsum at, maximus luctus diam. Nulla eu nisl sed elit sagittis faucibus. Maecenas sit amet ante sapien. Nunc imperdiet nunc tortor, sit amet venenatis sapien condimentum id. Donec facilisis blandit risus non sollicitudin.

</div>

</div>

</div>
</section>

<section class="section-row">

<div class="diptych">

<div class="section">

## Powered by Graphene

<strong>Graphene</strong> is the node graph engine that powers Graphite's compositor and procedural graphics pipeline. It's a visual scripting environment built upon the high-performance Rust programming language. Its runtime is designed to distribute rendering across CPU cores, GPUs, and network/cloud machines while optimizing for interactive frame rates.

<!-- Rust programmers may find the following technical details to be of interest. Graphene node graphs are programs built out of reusable Rust functions using Graphite as a visual "code" editor. New nodes and data types can be implemented by writing custom Rust code with a built-in text editor. `no_std` code also gets compiled to GPU compute shaders using [`rust-gpu`](https://github.com/EmbarkStudios/rust-gpu). Each node is independently pre-compiled by `rustc` into portable WASM binaries and linked at runtime. Groups of nodes may be compiled into one unit of execution, utilizing Rust's zero-cost abstractions and optimizations to run with less overhead. And whole node graphs can be compiled into standalone executables for use outside Graphite. -->

</div>
<div class="section">

<!-- ## Proudly written in Rust -->
## Written in Rust

Always on the bleeding edge and built to last— Graphite is written on a robust foundation with Rust, a modern programming language optimized for creating fast, reliable, future-proof software. Even the GPU compute shaders are written in Rust, enabling reuse of CPU code implementations for nodes.

<!-- The underlying node graph engine that computes and renders Graphite documents is called Graphene. The Graphene engine is an extension of the Rust language, acting as a system for chaining together modular functions into useful pipelines with GPU and parallel computation. Artists can harness these powerful capabilities directly in the Graphite editor without touching code. Technical artists and programmers can write reusable Rust functions to extend the capabilities of Graphite and create new nodes to share with the community. -->

</div>

</div>

</section>

<section class="section-row">
<div class="section">

## Roadmap

<!-- and [monthly sprints](https://github.com/GraphiteEditor/Graphite/milestones). -->
<!-- Development broke ground in February 2021. -->
<!-- TODO -->

<div class="roadmap">
	<div class="informational-group features">
		<div class="informational complete heading" title="Development Complete">
			<h3>— Pre-Alpha —</h3>
		</div>
		<div class="informational complete" title="Development Complete">
			<img class="atlas" style="--atlas-index: 0" src="icon-atlas-roadmap.png" alt="" />
			<span>Editor systems, basic vector art tools</span>
		</div>
		<div class="informational complete heading" title="Development Complete">
			<h3>— Alpha Milestone 1 —</h3>
		</div>
		<div class="informational complete" title="Development Complete">
			<img class="atlas" style="--atlas-index: 1" src="icon-atlas-roadmap.png" alt="" />
			<span>Tool upgrades, Graphene prototyping</span>
		</div>
		<div class="informational ongoing heading" title="Development Ongoing">
			<h3>— Alpha Milestone 2 —</h3>
		</div>
		<div class="informational complete" title="Development Complete">
			<img class="atlas" style="--atlas-index: 4" src="icon-atlas-roadmap.png" alt="" />
			<span>Brush tool</span>
		</div>
		<div class="informational ongoing" title="Development Ongoing">
			<img class="atlas" style="--atlas-index: 11" src="icon-atlas-roadmap.png" alt="" />
			<span>WebGPU accelerated rendering</span>
		</div>
		<div class="informational ongoing" title="Development Ongoing">
			<img class="atlas" style="--atlas-index: 2" src="icon-atlas-roadmap.png" alt="" />
			<span>Layer stack compositing</span>
		</div>
		<div class="informational ongoing">
			<img class="atlas" style="--atlas-index: 5" src="icon-atlas-roadmap.png" alt="" />
			<span>Graph-based documents</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 3" src="icon-atlas-roadmap.png" alt="" />
			<span>Node-based layer tree</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 14" src="icon-atlas-roadmap.png" alt="" />
			<span>Resolution-agnostic raster rendering</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 19" src="icon-atlas-roadmap.png" alt="" />
			<span>Document history system</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 18" src="icon-atlas-roadmap.png" alt="" />
			<span>Stable document format</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 7" src="icon-atlas-roadmap.png" alt="" />
			<span>Custom subgraph document nodes</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 22" src="icon-atlas-roadmap.png" alt="" />
			<span>Select mode and masking</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 13" src="icon-atlas-roadmap.png" alt="" />
			<span>New viewport overlays system</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 6" src="icon-atlas-roadmap.png" alt="" />
			<span>Self-updating desktop app</span>
		</div>
		<div class="informational heading">
			<h3>— Alpha Milestone 3 —</h3>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 8" src="icon-atlas-roadmap.png" alt="" />
			<span>Graph data attributes</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 9" src="icon-atlas-roadmap.png" alt="" />
			<span>Spreadsheet-based vector data</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 10" src="icon-atlas-roadmap.png" alt="" />
			<span>Editable SVG import</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 12" src="icon-atlas-roadmap.png" alt="" />
			<span>Rust-based vector renderer</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 20" src="icon-atlas-roadmap.png" alt="" />
			<span>RAW photo import and processing</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 15" src="icon-atlas-roadmap.png" alt="" />
			<span>Powerful snapping and grid system</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 16" src="icon-atlas-roadmap.png" alt="" />
			<span>Remote compile/render server</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 17" src="icon-atlas-roadmap.png" alt="" />
			<span>Code editor for custom nodes</span>
		</div>
		<div class="informational heading">
			<h3>— Beta —</h3>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 21" src="icon-atlas-roadmap.png" alt="" />
			<span>Procedural paint brush styling</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 23" src="icon-atlas-roadmap.png" alt="" />
			<span>Frozen history references</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 24" src="icon-atlas-roadmap.png" alt="" />
			<span>Internationalization and accessability</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 25" src="icon-atlas-roadmap.png" alt="" />
			<span>Reconfigurable workspace panels</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 26" src="icon-atlas-roadmap.png" alt="" />
			<span>Liquify and non-affine rendering</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 27" src="icon-atlas-roadmap.png" alt="" />
			<span>Interactive graph auto-layout</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 28" src="icon-atlas-roadmap.png" alt="" />
			<span>Automation and batch processing</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 29" src="icon-atlas-roadmap.png" alt="" />
			<span>Guide mode</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 30" src="icon-atlas-roadmap.png" alt="" />
			<span>CAD-like constraint solver</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 31" src="icon-atlas-roadmap.png" alt="" />
			<span>Constraint models for UI layouts</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 32" src="icon-atlas-roadmap.png" alt="" />
			<span>Advanced typography and typesetting</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 33" src="icon-atlas-roadmap.png" alt="" />
			<span>PDF export</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 34" src="icon-atlas-roadmap.png" alt="" />
			<span>HDR and WCG color handling</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 35" src="icon-atlas-roadmap.png" alt="" />
			<span>Node manager and marketplace</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 36" src="icon-atlas-roadmap.png" alt="" />
			<span>Predictive graph rendering/caching</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 37" src="icon-atlas-roadmap.png" alt="" />
			<span>Distributed graph rendering</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 38" src="icon-atlas-roadmap.png" alt="" />
			<span>Cloud document storage</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 39" src="icon-atlas-roadmap.png" alt="" />
			<span>Multiplayer collaborative editing</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 40" src="icon-atlas-roadmap.png" alt="" />
			<span>Offline edit resolution with CRDTs</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 41" src="icon-atlas-roadmap.png" alt="" />
			<span>Native UI rewrite from HTML frontend</span>
		</div>
		<div class="informational heading">
			<h3>— 1.0 Release —</h3>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 42" src="icon-atlas-roadmap.png" alt="" />
			<span>Timeline and renderer for animation</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 43" src="icon-atlas-roadmap.png" alt="" />
			<span>Live video compositing</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 44" src="icon-atlas-roadmap.png" alt="" />
			<span>Pen and touch-only interaction</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 45" src="icon-atlas-roadmap.png" alt="" />
			<span>iPad app</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 46" src="icon-atlas-roadmap.png" alt="" />
			<span>Portable render engine</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 48" src="icon-atlas-roadmap.png" alt="" />
			<span>SVG animation</span>
		</div>
		<div class="informational">
			<img class="atlas" style="--atlas-index: 49" src="icon-atlas-roadmap.png" alt="" />
			<span><em>…and that's all just the beginning…</em></span>
		</div>
	</div>
</div>

</div>
</section>

<section id="get-involved-box" class="feature-box">
<div class="box">
<div class="diptych">

<div class="section">

## Get involved

The Graphite project could not exist without its community. Building its ambitious and versatile featureset will require contributions from developers, designers, technical experts, creative professionals, and eagle-eyed bug hunters. Help build the future of digital art.

<a href="/contribute" class="link arrow">Contribute</a>

</div>
<div class="graphic">
	<img src="https://static.graphite.rs/content/index/volunteer.svg" alt="" />
</div>

</div>
</div>
</section>
