/**
 * Block Icons
 */

const el = wp.element.createElement

const UAGB_Block_Icons = {
	"section": el("svg", { width: 20, height: 20 },
		el("path", { d: "M20 18.008h-20v-16.016h20v16.016zM1.172 16.836h17.656v-13.672h-17.656v13.672z" } ),
		el("path", { d: "M7.617 4.604h4.766v1.172h-4.766v-1.172z" } ),
		el("path", { d: "M8.998 14.385h-6.237v-6.238h6.238v6.238zM3.932 13.213h3.894v-3.894h-3.894v3.894z" } ),
		el("path", { d: "M17.24 11.852h-6.237v-3.705h6.238v3.705zM12.174 10.68h3.894v-1.361h-3.894v1.361z" } ),
		el("path", { d: "M11.588 13.024h5.066v1.172h-5.066v-1.172z" } )
	),
	"buttons": el("svg", { width: 20, height: 20 },
		el("path", { d: "M20 18.008h-20v-16.016h20v16.016zM1.172 16.836h17.656v-13.672h-17.656v13.672z" } ),
		el("path", { d: "M10.758 6.289h-7.421v7.421l12.987 0.001v-7.422h-5.566zM5.192 11.855v-3.711h3.711v3.711h-3.711zM14.469 11.855h-3.711v-3.711h3.711v3.711z" } )
	),
	"advanced_heading": el("svg", { width: 20, height: 20 },
		el("path", { d: "M0 18h20v2h-20v-2z" } ),
		el("path", { d: "M11 0h-2l-7.25 16h2.25l2.21-5h7.59l2.2 5h2.25l-7.25-16zM7.090 9l2.91-6.59 2.91 6.59h-5.82z" } )
	),
	"google_map": el("svg", { width: 20, height: 20 },
		el("path", { d: "M10 0c-4.112 0-7.458 3.347-7.458 7.461 0 6.13 6.716 12.115 7.002 12.367 0.131 0.115 0.293 0.172 0.456 0.172s0.326-0.058 0.456-0.172c0.286-0.252 7.002-6.237 7.002-12.367 0-4.114-3.345-7.461-7.458-7.461v0zM10 18.363c-1.485-1.439-6.077-6.265-6.077-10.902 0-3.353 2.726-6.080 6.077-6.080s6.077 2.728 6.077 6.080c0 4.637-4.592 9.463-6.077 10.902v0z" } ),
		el("path", { d: "M10 3.986c-1.904 0-3.453 1.559-3.453 3.475s1.549 3.476 3.453 3.476c1.904 0 3.453-1.559 3.453-3.476s-1.549-3.475-3.453-3.475v0zM10 9.555c-1.142 0-2.071-0.939-2.071-2.094s0.929-2.095 2.071-2.095 2.072 0.94 2.072 2.095c0 1.155-0.93 2.094-2.072 2.094v0z" } )
	),
	"info_box": el("svg", { width: 20, height: 20 },
		el("path", { d: "M0 1.992v16.016h20v-16.016h-20zM11.406 16.836h-10.234v-10.898h10.234v10.898zM18.828 16.836h-6.25v-2.852h6.25v2.852zM18.828 12.813h-6.25v-6.875h6.25v6.875zM1.172 4.766v-1.602h17.656v1.602h-17.656z" } ),
		el("path", { d: "M2.652 15.325h7.274v-7.877h-7.274v7.877zM3.824 8.62h4.931v5.534h-4.931v-5.534z" } ),
		el("path", { d: "M13.486 10.13h4.434v1.172h-4.434v-1.172z" } ),
		el("path", { d: "M13.486 7.448h4.434v1.172h-4.434v-1.172z" } )
	),
	"post_carousel": el("svg", { width: 20, height: 20 },
		el("path", { d: "M7.554 12.936h4.893v-5.871h-4.893v5.871zM8.888 8.399h2.224v3.202h-2.224v-3.202z" } ),
		el("path", { d: "M13.913 8.868l1.132 1.132-1.132 1.132 0.944 0.944 2.076-2.076-2.076-2.076-0.943 0.943z" } ),
		el("path", { d: "M5.144 7.924l-2.076 2.076 2.076 2.076 0.943-0.944-1.132-1.132 1.132-1.132-0.944-0.943z" } ),
		el("path", { d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM1.32 18.62v-17.301h17.3v17.3h-17.3z" } )
	),
	"post_masonry": el("svg", { width: 20, height: 20 },
		el("path", { d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM18.62 6.206h-4.825v-4.825h4.825v4.825zM18.62 12.413h-4.825v-4.825h4.825v4.825zM7.588 5.788h4.825v8.825h-4.825v-8.825zM12.413 1.381v3.025h-4.825v-3.025h4.825zM6.206 1.381v11.025h-4.825v-11.025h4.825zM1.381 13.794h4.825v4.826h-4.825v-4.826zM7.588 18.62v-2.826h4.825v2.826h-4.825zM13.794 18.62v-4.826h4.825v4.826h-4.825z" } )
	),
	"post_grid": el("svg", { width: 20, height: 20 },
		el("path", { d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM18.62 6.206h-4.825v-4.825h4.825v4.825zM18.62 12.413h-4.825v-4.825h4.825v4.825zM1.381 7.588h4.825v4.825h-4.825v-4.825zM7.588 7.588h4.825v4.825h-4.825v-4.825zM12.413 1.381v4.825h-4.825v-4.825h4.825zM6.206 1.381v4.825h-4.825v-4.825h4.825zM1.381 13.794h4.825v4.826h-4.825v-4.826zM7.588 18.62v-4.826h4.825v4.826h-4.825zM13.794 18.62v-4.826h4.825v4.826h-4.825z" } )
	)
}

export default UAGB_Block_Icons
