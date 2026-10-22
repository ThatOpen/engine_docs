# OcclusionPassContext

Forward-draw hook fired AFTER the deferred composite. The consumer (points /
splats) draws straight into the finished frame, whose depth attachment is
BORROWED from the capture G-buffer, so its fragments depth-test against the
real BIM depth (occluded behind walls) — Phase-1 occlusion, no shader patch.
Mirrors the old DeferredPipeline's OcclusionPass contract (direct mode).
