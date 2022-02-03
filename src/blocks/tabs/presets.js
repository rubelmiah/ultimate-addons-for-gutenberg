import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const presets = [
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'tabsStyleD', value: 'hstyle2' },
			{ label: 'tabBodyTopPadding', value: 15 },
			{ label: 'tabBodyRightPadding', value: 15 },
			{ label: 'tabBodyBottomPadding', value: 15 },
			{ label: 'tabBodyLeftPadding', value: 0 },
			{ label: 'borderColor', value: 'transparent' },
			{ label: 'borderRadius', value: 0 }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M60 29H12C11.4477 29 11 29.4477 11 30V42C11 42.5523 11.4477 43 12 43H60C60.5523 43 61 42.5523 61 42V30C61 29.4477 60.5523 29 60 29ZM12 28C10.8954 28 10 28.8954 10 30V42C10 43.1046 10.8954 44 12 44H60C61.1046 44 62 43.1046 62 42V30C62 28.8954 61.1046 28 60 28H12Z" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'hstyle3' },
			{ label: 'titleAlign', value: 'left'},
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'borderColor', value: '#E0E0E0' },
			{ label: 'borderRadius', value: 0 }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M53 29H19C15.134 29 12 32.134 12 36C12 39.866 15.134 43 19 43H53C56.866 43 60 39.866 60 36C60 32.134 56.866 29 53 29ZM19 28C14.5817 28 11 31.5817 11 36C11 40.4183 14.5817 44 19 44H53C57.4183 44 61 40.4183 61 36C61 31.5817 57.4183 28 53 28H19Z"/></svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'vstyle6' },
			{ label: 'titleAlign', value: 'center'},
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'borderColor', value: '#E0E0E0' },
			{ label: 'borderRadius', value: 4}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="28" width="51" height="16" rx="2" fill="#DFE5EE"/><mask id="mask0_37_23" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="10" y="28" width="51" height="16"><rect x="10" y="28" width="51" height="16" rx="2" fill="#DFE5EE"/></mask><g mask="url(#mask0_37_23)"><path d="M14.6364 45.1765H16.9545V47.4706H14.6364V45.1765Z" /><path d="M14.6364 36H16.9545V38.2941H14.6364V36Z" /><path d="M14.6364 49.7647H16.9545V52.0588H14.6364V49.7647Z" /><path d="M14.6364 40.5882H16.9545V42.8824H14.6364V40.5882Z" /><path d="M16.9545 47.4706H19.2727V49.7647H16.9545V47.4706Z" /><path d="M16.9545 38.2941H19.2727V40.5882H16.9545V38.2941Z" /><path d="M16.9545 52.0588H19.2727V54.3529H16.9545V52.0588Z" /><path d="M14.6364 54.3529H16.9545V56.6471H14.6364V54.3529Z" /><path d="M16.9545 42.8824H19.2727V45.1765H16.9545V42.8824Z" /><path d="M10 45.1765H12.3182V47.4706H10V45.1765Z" /><path d="M10 36H12.3182V38.2941H10V36Z" /><path d="M10 49.7647H12.3182V52.0588H10L10 49.7647Z" /><path d="M10 40.5882H12.3182V42.8824H10V40.5882Z" /><path d="M12.3182 47.4706H14.6364V49.7647H12.3182V47.4706Z" /><path d="M12.3182 52.0588H14.6364V54.3529H12.3182V52.0588Z" /><path d="M12.3182 38.2941H14.6364V40.5882H12.3182V38.2941Z" /><path d="M10 54.3529H12.3182L12.3182 56.6471H10V54.3529Z" /><path d="M12.3182 42.8824H14.6364V45.1765H12.3182V42.8824Z" /><path d="M19.2727 45.1765H21.5909V47.4706H19.2727V45.1765Z" /><path d="M19.2727 36H21.5909V38.2941H19.2727V36Z" /><path d="M19.2727 49.7647H21.5909V52.0588H19.2727V49.7647Z" /><path d="M19.2727 40.5882H21.5909V42.8824H19.2727V40.5882Z" /><path d="M21.5909 52.0588H23.9091V54.3529H21.5909V52.0588Z" /><path d="M21.5909 47.4706H23.9091V49.7647H21.5909V47.4706Z" /><path d="M21.5909 38.2941H23.9091V40.5882H21.5909V38.2941Z" /><path d="M19.2727 54.3529H21.5909V56.6471H19.2727V54.3529Z" /><path d="M21.5909 42.8824H23.9091V45.1765H21.5909V42.8824Z" /><path d="M23.9091 45.1765H26.2273V47.4706H23.9091V45.1765Z" /><path d="M23.9091 36H26.2273V38.2941H23.9091V36Z" /><path d="M23.9091 49.7647H26.2273V52.0588H23.9091V49.7647Z" /><path d="M26.2273 52.0588H28.5455V54.3529H26.2273V52.0588Z" /><path d="M23.9091 40.5882H26.2273V42.8824H23.9091V40.5882Z" /><path d="M26.2273 47.4706H28.5455V49.7647H26.2273V47.4706Z" /><path d="M26.2273 38.2941H28.5455V40.5882H26.2273V38.2941Z" /><path d="M23.9091 54.3529H26.2273V56.6471H23.9091V54.3529Z" /><path d="M26.2273 42.8824H28.5455V45.1765H26.2273V42.8824Z" /><path d="M28.5455 45.1765H30.8636V47.4706H28.5455V45.1765Z" /><path d="M28.5455 36H30.8636V38.2941H28.5455V36Z" /><path d="M30.8636 52.0588H33.1818V54.3529H30.8636V52.0588Z" /><path d="M28.5455 49.7647H30.8636V52.0588H28.5455V49.7647Z" /><path d="M28.5455 40.5882H30.8636V42.8824H28.5455V40.5882Z" /><path d="M30.8636 47.4706H33.1818V49.7647H30.8636V47.4706Z" /><path d="M30.8636 38.2941H33.1818V40.5882H30.8636V38.2941Z" /><path d="M28.5455 54.3529H30.8636V56.6471H28.5455V54.3529Z" /><path d="M30.8636 42.8824H33.1818V45.1765H30.8636V42.8824Z" /><path d="M33.1818 45.1765H35.5V47.4706H33.1818V45.1765Z" /><path d="M35.5 52.0588H37.8182V54.3529H35.5V52.0588Z" /><path d="M33.1818 36H35.5V38.2941H33.1818V36Z" /><path d="M33.1818 49.7647H35.5V52.0588H33.1818V49.7647Z" /><path d="M33.1818 40.5882H35.5V42.8824H33.1818V40.5882Z" /><path d="M35.5 47.4706H37.8182V49.7647H35.5V47.4706Z" /><path d="M35.5 38.2941H37.8182V40.5882H35.5V38.2941Z" /><path d="M33.1818 54.3529H35.5V56.6471H33.1818V54.3529Z" /><path d="M35.5 42.8824H37.8182V45.1765H35.5V42.8824Z" /><path d="M40.1364 52.0588H42.4545V54.3529H40.1364V52.0588Z" /><path d="M37.8182 45.1765H40.1364V47.4706H37.8182V45.1765Z" /><path d="M37.8182 36H40.1364V38.2941H37.8182V36Z" /><path d="M37.8182 49.7647H40.1364V52.0588H37.8182V49.7647Z" /><path d="M37.8182 40.5882H40.1364V42.8824H37.8182V40.5882Z" /><path d="M40.1364 47.4706H42.4545V49.7647H40.1364V47.4706Z" /><path d="M40.1364 38.2941H42.4545V40.5882H40.1364V38.2941Z" /><path d="M37.8182 54.3529H40.1364V56.6471H37.8182V54.3529Z" /><path d="M44.7727 52.0588H47.0909V54.3529H44.7727V52.0588Z" /><path d="M40.1364 42.8824H42.4545V45.1765H40.1364V42.8824Z" /><path d="M42.4545 45.1765H44.7727V47.4706H42.4545V45.1765Z" /><path d="M42.4545 36H44.7727V38.2941H42.4545V36Z" /><path d="M42.4545 49.7647H44.7727V52.0588H42.4545V49.7647Z" /><path d="M42.4545 40.5882H44.7727V42.8824H42.4545V40.5882Z" /><path d="M44.7727 47.4706H47.0909V49.7647H44.7727V47.4706Z" /><path d="M44.7727 38.2941H47.0909V40.5882H44.7727V38.2941Z" /><path d="M49.4091 52.0588H51.7273V54.3529H49.4091V52.0588Z" /><path d="M42.4545 54.3529H44.7727V56.6471H42.4545V54.3529Z" /><path d="M44.7727 42.8824H47.0909V45.1765H44.7727V42.8824Z" /><path d="M47.0909 45.1765H49.4091V47.4706H47.0909V45.1765Z" /><path d="M47.0909 36H49.4091V38.2941H47.0909V36Z" /><path d="M47.0909 49.7647H49.4091V52.0588H47.0909V49.7647Z" /><path d="M47.0909 40.5882H49.4091V42.8824H47.0909V40.5882Z" /><path d="M49.4091 47.4706H51.7273V49.7647H49.4091V47.4706Z" /><path d="M54.0455 52.0588H56.3636V54.3529H54.0455V52.0588Z" /><path d="M49.4091 38.2941H51.7273V40.5882H49.4091V38.2941Z" /><path d="M47.0909 54.3529H49.4091V56.6471H47.0909V54.3529Z" /><path d="M49.4091 42.8824H51.7273V45.1765H49.4091V42.8824Z" /><path d="M51.7273 45.1765H54.0455V47.4706H51.7273V45.1765Z" /><path d="M51.7273 36H54.0455V38.2941H51.7273V36Z" /><path d="M51.7273 49.7647H54.0455V52.0588H51.7273V49.7647Z" /><path d="M51.7273 40.5882H54.0455V42.8824H51.7273V40.5882Z" /><path d="M58.6818 52.0588H61V54.3529H58.6818V52.0588Z" /><path d="M54.0455 47.4706H56.3636V49.7647H54.0455V47.4706Z" /><path d="M54.0455 38.2941H56.3636V40.5882H54.0455V38.2941Z" /><path d="M51.7273 54.3529H54.0455V56.6471H51.7273V54.3529Z" /><path d="M54.0455 42.8824H56.3636V45.1765H54.0455V42.8824Z" /><path d="M56.3636 45.1765H58.6818V47.4706H56.3636V45.1765Z" /><path d="M56.3636 36H58.6818V38.2941H56.3636V36Z" /><path d="M56.3636 49.7647H58.6818V52.0588H56.3636V49.7647Z" /><path d="M56.3636 40.5882H58.6818V42.8824H56.3636V40.5882Z" /><path d="M58.6818 47.4706H61V49.7647H58.6818V47.4706Z" /><path d="M58.6818 38.2941H61V40.5882H58.6818V38.2941Z" /><path d="M56.3636 54.3529H58.6818V56.6471H56.3636V54.3529Z" /><path d="M58.6818 42.8824H61V45.1765H58.6818V42.8824Z" /><path d="M14.6364 63.5294H16.9545V65.8235H14.6364V63.5294Z" /><path d="M14.6364 54.3529H16.9545V56.6471H14.6364V54.3529Z" /><path d="M14.6364 68.1176H16.9545V70.4118H14.6364V68.1176Z" /><path d="M14.6364 58.9412H16.9545V61.2353H14.6364L14.6364 58.9412Z" /><path d="M16.9545 65.8235H19.2727V68.1176H16.9545V65.8235Z" /><path d="M16.9545 56.6471H19.2727V58.9412H16.9545V56.6471Z" /><path d="M16.9545 70.4118H19.2727V72.7059H16.9545V70.4118Z" /><path d="M14.6364 72.7059H16.9545V75H14.6364V72.7059Z" /><path d="M16.9545 61.2353H19.2727V63.5294H16.9545V61.2353Z" /><path d="M10 63.5294H12.3182V65.8235H10V63.5294Z" /><path d="M10 54.3529H12.3182L12.3182 56.6471H10V54.3529Z" /><path d="M10 68.1176H12.3182V70.4118H10V68.1176Z" /><path d="M10 58.9412H12.3182V61.2353H10V58.9412Z" /><path d="M12.3182 65.8235H14.6364V68.1176H12.3182V65.8235Z" /><path d="M12.3182 70.4118H14.6364V72.7059H12.3182V70.4118Z" /><path d="M12.3182 56.6471H14.6364V58.9412H12.3182V56.6471Z" /><path d="M10 72.7059H12.3182V75H10V72.7059Z" /><path d="M12.3182 61.2353H14.6364V63.5294H12.3182V61.2353Z" /><path d="M19.2727 63.5294H21.5909V65.8235H19.2727V63.5294Z" /><path d="M19.2727 54.3529H21.5909V56.6471H19.2727V54.3529Z" /><path d="M19.2727 68.1176H21.5909V70.4118H19.2727V68.1176Z" /><path d="M19.2727 58.9412H21.5909V61.2353H19.2727V58.9412Z" /><path d="M21.5909 70.4118H23.9091V72.7059H21.5909V70.4118Z" /><path d="M21.5909 65.8235H23.9091V68.1176H21.5909V65.8235Z" /><path d="M21.5909 56.6471H23.9091V58.9412H21.5909V56.6471Z" /><path d="M19.2727 72.7059H21.5909V75H19.2727V72.7059Z" /><path d="M21.5909 61.2353H23.9091V63.5294H21.5909V61.2353Z" /><path d="M23.9091 63.5294H26.2273V65.8235H23.9091V63.5294Z" /><path d="M23.9091 54.3529H26.2273V56.6471H23.9091V54.3529Z" /><path d="M23.9091 68.1176H26.2273V70.4118H23.9091V68.1176Z" /><path d="M26.2273 70.4118H28.5455V72.7059H26.2273V70.4118Z" /><path d="M23.9091 58.9412H26.2273V61.2353H23.9091V58.9412Z" /><path d="M26.2273 65.8235H28.5455L28.5455 68.1176H26.2273L26.2273 65.8235Z" /><path d="M26.2273 56.6471H28.5455V58.9412H26.2273V56.6471Z" /><path d="M23.9091 72.7059H26.2273V75H23.9091V72.7059Z" /><path d="M26.2273 61.2353H28.5455V63.5294H26.2273V61.2353Z" /><path d="M28.5455 63.5294H30.8636V65.8235H28.5455V63.5294Z" /><path d="M28.5455 54.3529H30.8636V56.6471H28.5455V54.3529Z" /><path d="M30.8636 70.4118H33.1818V72.7059H30.8636V70.4118Z" /><path d="M28.5455 68.1176H30.8636V70.4118H28.5455V68.1176Z" /><path d="M28.5455 58.9412H30.8636V61.2353H28.5455V58.9412Z" /><path d="M30.8636 65.8235H33.1818V68.1176H30.8636L30.8636 65.8235Z" /><path d="M30.8636 56.6471H33.1818V58.9412H30.8636V56.6471Z" /><path d="M28.5455 72.7059H30.8636V75H28.5455V72.7059Z" /><path d="M30.8636 61.2353H33.1818V63.5294H30.8636V61.2353Z" /><path d="M33.1818 63.5294H35.5V65.8235H33.1818V63.5294Z" /><path d="M35.5 70.4118H37.8182V72.7059H35.5V70.4118Z" /><path d="M33.1818 54.3529H35.5V56.6471H33.1818V54.3529Z" /><path d="M33.1818 68.1176H35.5V70.4118H33.1818V68.1176Z" /><path d="M33.1818 58.9412H35.5V61.2353H33.1818V58.9412Z" /><path d="M35.5 65.8235H37.8182V68.1176H35.5V65.8235Z" /><path d="M35.5 56.6471H37.8182V58.9412H35.5V56.6471Z" /><path d="M33.1818 72.7059H35.5V75H33.1818V72.7059Z" /><path d="M35.5 61.2353H37.8182V63.5294H35.5V61.2353Z" /><path d="M40.1364 70.4118H42.4545V72.7059H40.1364V70.4118Z" /><path d="M37.8182 63.5294H40.1364V65.8235H37.8182V63.5294Z" /><path d="M37.8182 54.3529H40.1364V56.6471H37.8182V54.3529Z" /><path d="M37.8182 68.1176H40.1364V70.4118H37.8182V68.1176Z" /><path d="M37.8182 58.9412H40.1364V61.2353H37.8182V58.9412Z" /><path d="M40.1364 65.8235H42.4545V68.1176H40.1364V65.8235Z" /><path d="M40.1364 56.6471H42.4545V58.9412H40.1364V56.6471Z" /><path d="M37.8182 72.7059H40.1364V75H37.8182V72.7059Z" /><path d="M44.7727 70.4118H47.0909V72.7059H44.7727V70.4118Z" /><path d="M40.1364 61.2353H42.4545V63.5294H40.1364V61.2353Z" /><path d="M42.4545 63.5294H44.7727V65.8235H42.4545V63.5294Z" /><path d="M42.4545 54.3529H44.7727V56.6471H42.4545V54.3529Z" /><path d="M42.4545 68.1176H44.7727V70.4118H42.4545V68.1176Z" /><path d="M42.4545 58.9412H44.7727V61.2353H42.4545V58.9412Z" /><path d="M44.7727 65.8235H47.0909V68.1176H44.7727V65.8235Z" /><path d="M44.7727 56.6471H47.0909V58.9412H44.7727V56.6471Z" /><path d="M49.4091 70.4118H51.7273V72.7059H49.4091V70.4118Z" /><path d="M42.4545 72.7059H44.7727V75H42.4545V72.7059Z" /><path d="M44.7727 61.2353H47.0909V63.5294H44.7727V61.2353Z" /><path d="M47.0909 63.5294H49.4091V65.8235H47.0909V63.5294Z" /><path d="M47.0909 54.3529H49.4091V56.6471H47.0909V54.3529Z" /><path d="M47.0909 68.1176H49.4091V70.4118H47.0909V68.1176Z" /><path d="M47.0909 58.9412H49.4091V61.2353H47.0909V58.9412Z" /><path d="M49.4091 65.8235H51.7273V68.1176H49.4091V65.8235Z" /><path d="M54.0455 70.4118H56.3636V72.7059H54.0455V70.4118Z" /><path d="M49.4091 56.6471H51.7273V58.9412H49.4091V56.6471Z" /><path d="M47.0909 72.7059H49.4091V75H47.0909V72.7059Z" /><path d="M49.4091 61.2353H51.7273V63.5294H49.4091V61.2353Z" /><path d="M51.7273 63.5294H54.0455V65.8235H51.7273V63.5294Z" /><path d="M51.7273 54.3529H54.0455V56.6471H51.7273V54.3529Z" /><path d="M51.7273 68.1176H54.0455V70.4118H51.7273V68.1176Z" /><path d="M51.7273 58.9412H54.0455V61.2353H51.7273V58.9412Z" /><path d="M58.6818 70.4118H61V72.7059H58.6818V70.4118Z" /><path d="M54.0455 65.8235H56.3636V68.1176H54.0455V65.8235Z" /><path d="M54.0455 56.6471H56.3636V58.9412H54.0455V56.6471Z" /><path d="M51.7273 72.7059H54.0455V75H51.7273V72.7059Z" /><path d="M54.0455 61.2353H56.3636V63.5294H54.0455V61.2353Z" /><path d="M56.3636 63.5294H58.6818V65.8235H56.3636V63.5294Z" /><path d="M56.3636 54.3529H58.6818V56.6471H56.3636V54.3529Z" /><path d="M56.3636 68.1176H58.6818V70.4118H56.3636V68.1176Z" /><path d="M56.3636 58.9412H58.6818V61.2353H56.3636V58.9412Z" /><path d="M58.6818 65.8235H61V68.1176H58.6818V65.8235Z" /><path d="M58.6818 56.6471H61V58.9412H58.6818V56.6471Z" /><path d="M56.3636 72.7059H58.6818V75H56.3636V72.7059Z" /><path d="M58.6818 61.2353H61V63.5294H58.6818V61.2353Z" /></g></svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'vstyle8' },
			{ label: 'titleAlign', value: 'center'},
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'borderColor', value: '#E0E0E0' },
			{ label: 'borderRadius', value: 0 }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="28" width="52" height="16" rx="8" fill="#DFE5EE"/><mask id="mask0_37_22" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="10" y="28" width="52" height="16"><rect x="10" y="28" width="52" height="16" rx="8" fill="white"/></mask><g mask="url(#mask0_37_22)"><path d="M14.7273 45.4118H17.0909V47.7647H14.7273V45.4118Z" /><path d="M14.7273 36H17.0909V38.3529H14.7273V36Z" /><path d="M14.7273 50.1176H17.0909V52.4706H14.7273V50.1176Z" /><path d="M14.7273 40.7059H17.0909V43.0588H14.7273V40.7059Z" /><path d="M17.0909 47.7647H19.4545V50.1176H17.0909V47.7647Z" /><path d="M17.0909 38.3529H19.4545V40.7059H17.0909V38.3529Z" /><path d="M17.0909 52.4706H19.4545V54.8235H17.0909V52.4706Z" /><path d="M14.7273 54.8235H17.0909V57.1765H14.7273V54.8235Z" /><path d="M17.0909 43.0588H19.4545V45.4118H17.0909V43.0588Z" /><path d="M10 45.4118H12.3636V47.7647H10V45.4118Z" /><path d="M10 36H12.3636V38.3529H10V36Z" /><path d="M10 50.1176H12.3636V52.4706H10L10 50.1176Z" /><path d="M10 40.7059H12.3636V43.0588H10V40.7059Z" /><path d="M12.3636 47.7647H14.7273V50.1176H12.3636V47.7647Z" /><path d="M12.3636 52.4706H14.7273V54.8235H12.3636V52.4706Z" /><path d="M12.3636 38.3529H14.7273V40.7059H12.3636V38.3529Z" /><path d="M10 54.8235H12.3636L12.3636 57.1765H10V54.8235Z" /><path d="M12.3636 43.0588H14.7273V45.4118H12.3636V43.0588Z" /><path d="M19.4545 45.4118H21.8182V47.7647H19.4545V45.4118Z" /><path d="M19.4545 36H21.8182V38.3529H19.4545V36Z" /><path d="M19.4545 50.1176H21.8182V52.4706H19.4545V50.1176Z" /><path d="M19.4545 40.7059H21.8182V43.0588H19.4545V40.7059Z" /><path d="M21.8182 52.4706H24.1818V54.8235H21.8182V52.4706Z" /><path d="M21.8182 47.7647H24.1818V50.1176H21.8182V47.7647Z" /><path d="M21.8182 38.3529H24.1818V40.7059H21.8182V38.3529Z" /><path d="M19.4545 54.8235H21.8182V57.1765H19.4545V54.8235Z" /><path d="M21.8182 43.0588H24.1818V45.4118H21.8182V43.0588Z" /><path d="M24.1818 45.4118H26.5455V47.7647H24.1818V45.4118Z" /><path d="M24.1818 36H26.5455V38.3529H24.1818V36Z" /><path d="M24.1818 50.1176H26.5455V52.4706H24.1818V50.1176Z" /><path d="M26.5455 52.4706H28.9091V54.8235H26.5455V52.4706Z" /><path d="M24.1818 40.7059H26.5455V43.0588H24.1818V40.7059Z" /><path d="M26.5455 47.7647H28.9091V50.1176H26.5455V47.7647Z" /><path d="M26.5455 38.3529H28.9091V40.7059H26.5455V38.3529Z" /><path d="M24.1818 54.8235H26.5455V57.1765H24.1818V54.8235Z" /><path d="M26.5455 43.0588H28.9091V45.4118H26.5455V43.0588Z" /><path d="M28.9091 45.4118H31.2727V47.7647H28.9091V45.4118Z" /><path d="M28.9091 36H31.2727V38.3529H28.9091V36Z" /><path d="M31.2727 52.4706H33.6364V54.8235H31.2727V52.4706Z" /><path d="M28.9091 50.1176H31.2727V52.4706H28.9091V50.1176Z" /><path d="M28.9091 40.7059H31.2727V43.0588H28.9091V40.7059Z" /><path d="M31.2727 47.7647H33.6364V50.1176H31.2727V47.7647Z" /><path d="M31.2727 38.3529H33.6364V40.7059H31.2727V38.3529Z" /><path d="M28.9091 54.8235H31.2727V57.1765H28.9091V54.8235Z" /><path d="M31.2727 43.0588H33.6364V45.4118H31.2727V43.0588Z" /><path d="M33.6364 45.4118H36V47.7647H33.6364V45.4118Z" /><path d="M36 52.4706H38.3636V54.8235H36V52.4706Z" /><path d="M33.6364 36H36V38.3529H33.6364V36Z" /><path d="M33.6364 50.1176H36V52.4706H33.6364V50.1176Z" /><path d="M33.6364 40.7059H36V43.0588H33.6364V40.7059Z" /><path d="M36 47.7647H38.3636V50.1176H36V47.7647Z" /><path d="M36 38.3529H38.3636V40.7059H36V38.3529Z" /><path d="M33.6364 54.8235H36V57.1765H33.6364V54.8235Z" /><path d="M36 43.0588H38.3636V45.4118H36V43.0588Z" /><path d="M40.7273 52.4706H43.0909V54.8235H40.7273V52.4706Z" /><path d="M38.3636 45.4118H40.7273V47.7647H38.3636V45.4118Z" /><path d="M38.3636 36H40.7273V38.3529H38.3636V36Z" /><path d="M38.3636 50.1176H40.7273V52.4706H38.3636V50.1176Z" /><path d="M38.3636 40.7059H40.7273V43.0588H38.3636V40.7059Z" /><path d="M40.7273 47.7647H43.0909V50.1176H40.7273V47.7647Z" /><path d="M40.7273 38.3529H43.0909V40.7059H40.7273V38.3529Z" /><path d="M38.3636 54.8235H40.7273V57.1765H38.3636V54.8235Z" /><path d="M45.4545 52.4706H47.8182V54.8235H45.4545V52.4706Z" /><path d="M40.7273 43.0588H43.0909V45.4118H40.7273V43.0588Z" /><path d="M43.0909 45.4118H45.4545V47.7647H43.0909V45.4118Z" /><path d="M43.0909 36H45.4545V38.3529H43.0909V36Z" /><path d="M43.0909 50.1176H45.4545V52.4706H43.0909V50.1176Z" /><path d="M43.0909 40.7059H45.4545V43.0588H43.0909V40.7059Z" /><path d="M45.4545 47.7647H47.8182V50.1176H45.4545V47.7647Z" /><path d="M45.4545 38.3529H47.8182V40.7059H45.4545V38.3529Z" /><path d="M50.1818 52.4706H52.5455V54.8235H50.1818V52.4706Z" /><path d="M43.0909 54.8235H45.4545V57.1765H43.0909V54.8235Z" /><path d="M45.4545 43.0588H47.8182V45.4118H45.4545V43.0588Z" /><path d="M47.8182 45.4118H50.1818V47.7647H47.8182V45.4118Z" /><path d="M47.8182 36H50.1818V38.3529H47.8182V36Z" /><path d="M47.8182 50.1176H50.1818V52.4706H47.8182V50.1176Z" /><path d="M47.8182 40.7059H50.1818V43.0588H47.8182V40.7059Z" /><path d="M50.1818 47.7647H52.5455V50.1176H50.1818V47.7647Z" /><path d="M54.9091 52.4706H57.2727V54.8235H54.9091V52.4706Z" /><path d="M50.1818 38.3529H52.5455V40.7059H50.1818V38.3529Z" /><path d="M47.8182 54.8235H50.1818V57.1765H47.8182V54.8235Z" /><path d="M50.1818 43.0588H52.5455V45.4118H50.1818V43.0588Z" /><path d="M52.5455 45.4118H54.9091V47.7647H52.5455V45.4118Z" /><path d="M52.5455 36H54.9091V38.3529H52.5455V36Z" /><path d="M52.5455 50.1176H54.9091V52.4706H52.5455V50.1176Z" /><path d="M52.5455 40.7059H54.9091V43.0588H52.5455V40.7059Z" /><path d="M59.6364 52.4706H62V54.8235H59.6364V52.4706Z" /><path d="M54.9091 47.7647H57.2727V50.1176H54.9091V47.7647Z" /><path d="M54.9091 38.3529H57.2727V40.7059H54.9091V38.3529Z" /><path d="M52.5455 54.8235H54.9091V57.1765H52.5455V54.8235Z" /><path d="M54.9091 43.0588H57.2727V45.4118H54.9091V43.0588Z" /><path d="M57.2727 45.4118H59.6364V47.7647H57.2727V45.4118Z" /><path d="M57.2727 36H59.6364V38.3529H57.2727V36Z" /><path d="M57.2727 50.1176H59.6364V52.4706H57.2727V50.1176Z" /><path d="M57.2727 40.7059H59.6364V43.0588H57.2727V40.7059Z" /><path d="M59.6364 47.7647H62V50.1176H59.6364V47.7647Z" /><path d="M59.6364 38.3529H62V40.7059H59.6364V38.3529Z" /><path d="M57.2727 54.8235H59.6364V57.1765H57.2727V54.8235Z" /><path d="M59.6364 43.0588H62V45.4118H59.6364V43.0588Z" /><path d="M14.7273 64.2353H17.0909V66.5882H14.7273V64.2353Z" /><path d="M14.7273 54.8235H17.0909V57.1765H14.7273V54.8235Z" /><path d="M14.7273 68.9412H17.0909V71.2941H14.7273V68.9412Z" /><path d="M14.7273 59.5294H17.0909V61.8824H14.7273L14.7273 59.5294Z" /><path d="M17.0909 66.5882H19.4545V68.9412H17.0909V66.5882Z" /><path d="M17.0909 57.1765H19.4545V59.5294H17.0909V57.1765Z" /><path d="M17.0909 71.2941H19.4545V73.6471H17.0909V71.2941Z" /><path d="M14.7273 73.6471H17.0909V76H14.7273V73.6471Z" /><path d="M17.0909 61.8824H19.4545V64.2353H17.0909V61.8824Z" /><path d="M10 64.2353H12.3636V66.5882H10V64.2353Z" /><path d="M10 54.8235H12.3636L12.3636 57.1765H10V54.8235Z" /><path d="M10 68.9412H12.3636V71.2941H10V68.9412Z" /><path d="M10 59.5294H12.3636V61.8824H10V59.5294Z" /><path d="M12.3636 66.5882H14.7273V68.9412H12.3636V66.5882Z" /><path d="M12.3636 71.2941H14.7273V73.6471H12.3636V71.2941Z" /><path d="M12.3636 57.1765H14.7273V59.5294H12.3636V57.1765Z" /><path d="M10 73.6471H12.3636V76H10V73.6471Z" /><path d="M12.3636 61.8824H14.7273V64.2353H12.3636V61.8824Z" /><path d="M19.4545 64.2353H21.8182V66.5882H19.4545V64.2353Z" /><path d="M19.4545 54.8235H21.8182V57.1765H19.4545V54.8235Z" /><path d="M19.4545 68.9412H21.8182V71.2941H19.4545V68.9412Z" /><path d="M19.4545 59.5294H21.8182V61.8824H19.4545V59.5294Z" /><path d="M21.8182 71.2941H24.1818V73.6471H21.8182V71.2941Z" /><path d="M21.8182 66.5882H24.1818V68.9412H21.8182V66.5882Z" /><path d="M21.8182 57.1765H24.1818V59.5294H21.8182V57.1765Z" /><path d="M19.4545 73.6471H21.8182V76H19.4545V73.6471Z" /><path d="M21.8182 61.8824H24.1818V64.2353H21.8182V61.8824Z" /><path d="M24.1818 64.2353H26.5455V66.5882H24.1818V64.2353Z" /><path d="M24.1818 54.8235H26.5455V57.1765H24.1818V54.8235Z" /><path d="M24.1818 68.9412H26.5455V71.2941H24.1818V68.9412Z" /><path d="M26.5455 71.2941H28.9091V73.6471H26.5455V71.2941Z" /><path d="M24.1818 59.5294H26.5455V61.8824H24.1818V59.5294Z" /><path d="M26.5455 66.5882H28.9091L28.9091 68.9412H26.5455L26.5455 66.5882Z" /><path d="M26.5455 57.1765H28.9091V59.5294H26.5455V57.1765Z" /><path d="M24.1818 73.6471H26.5455V76H24.1818V73.6471Z" /><path d="M26.5455 61.8824H28.9091V64.2353H26.5455V61.8824Z" /><path d="M28.9091 64.2353H31.2727V66.5882H28.9091V64.2353Z" /><path d="M28.9091 54.8235H31.2727V57.1765H28.9091V54.8235Z" /><path d="M31.2727 71.2941H33.6364V73.6471H31.2727V71.2941Z" /><path d="M28.9091 68.9412H31.2727V71.2941H28.9091V68.9412Z" /><path d="M28.9091 59.5294H31.2727V61.8824H28.9091V59.5294Z" /><path d="M31.2727 66.5882H33.6364V68.9412H31.2727L31.2727 66.5882Z" /><path d="M31.2727 57.1765H33.6364V59.5294H31.2727V57.1765Z" /><path d="M28.9091 73.6471H31.2727V76H28.9091V73.6471Z" /><path d="M31.2727 61.8824H33.6364V64.2353H31.2727V61.8824Z" /><path d="M33.6364 64.2353H36V66.5882H33.6364V64.2353Z" /><path d="M36 71.2941H38.3636V73.6471H36V71.2941Z" /><path d="M33.6364 54.8235H36V57.1765H33.6364V54.8235Z" /><path d="M33.6364 68.9412H36V71.2941H33.6364V68.9412Z" /><path d="M33.6364 59.5294H36V61.8824H33.6364V59.5294Z" /><path d="M36 66.5882H38.3636V68.9412H36V66.5882Z" /><path d="M36 57.1765H38.3636V59.5294H36V57.1765Z" /><path d="M33.6364 73.6471H36V76H33.6364V73.6471Z" /><path d="M36 61.8824H38.3636V64.2353H36V61.8824Z" /><path d="M40.7273 71.2941H43.0909V73.6471H40.7273V71.2941Z" /><path d="M38.3636 64.2353H40.7273V66.5882H38.3636V64.2353Z" /><path d="M38.3636 54.8235H40.7273V57.1765H38.3636V54.8235Z" /><path d="M38.3636 68.9412H40.7273V71.2941H38.3636V68.9412Z" /><path d="M38.3636 59.5294H40.7273V61.8824H38.3636V59.5294Z" /><path d="M40.7273 66.5882H43.0909V68.9412H40.7273V66.5882Z" /><path d="M40.7273 57.1765H43.0909V59.5294H40.7273V57.1765Z" /><path d="M38.3636 73.6471H40.7273V76H38.3636V73.6471Z" /><path d="M45.4545 71.2941H47.8182V73.6471H45.4545V71.2941Z" /><path d="M40.7273 61.8824H43.0909V64.2353H40.7273V61.8824Z" /><path d="M43.0909 64.2353H45.4545V66.5882H43.0909V64.2353Z" /><path d="M43.0909 54.8235H45.4545V57.1765H43.0909V54.8235Z" /><path d="M43.0909 68.9412H45.4545V71.2941H43.0909V68.9412Z" /><path d="M43.0909 59.5294H45.4545V61.8824H43.0909V59.5294Z" /><path d="M45.4545 66.5882H47.8182V68.9412H45.4545V66.5882Z" /><path d="M45.4545 57.1765H47.8182V59.5294H45.4545V57.1765Z" /><path d="M50.1818 71.2941H52.5455V73.6471H50.1818V71.2941Z" /><path d="M43.0909 73.6471H45.4545V76H43.0909V73.6471Z" /><path d="M45.4545 61.8824H47.8182V64.2353H45.4545V61.8824Z" /><path d="M47.8182 64.2353H50.1818V66.5882H47.8182V64.2353Z" /><path d="M47.8182 54.8235H50.1818V57.1765H47.8182V54.8235Z" /><path d="M47.8182 68.9412H50.1818V71.2941H47.8182V68.9412Z" /><path d="M47.8182 59.5294H50.1818V61.8824H47.8182V59.5294Z" /><path d="M50.1818 66.5882H52.5455V68.9412H50.1818V66.5882Z" /><path d="M54.9091 71.2941H57.2727V73.6471H54.9091V71.2941Z" /><path d="M50.1818 57.1765H52.5455V59.5294H50.1818V57.1765Z" /><path d="M47.8182 73.6471H50.1818V76H47.8182V73.6471Z" /><path d="M50.1818 61.8824H52.5455V64.2353H50.1818V61.8824Z" /><path d="M52.5455 64.2353H54.9091V66.5882H52.5455V64.2353Z" /><path d="M52.5455 54.8235H54.9091V57.1765H52.5455V54.8235Z" /><path d="M52.5455 68.9412H54.9091V71.2941H52.5455V68.9412Z" /><path d="M52.5455 59.5294H54.9091V61.8824H52.5455V59.5294Z" /><path d="M59.6364 71.2941H62V73.6471H59.6364V71.2941Z" /><path d="M54.9091 66.5882H57.2727V68.9412H54.9091V66.5882Z" /><path d="M54.9091 57.1765H57.2727V59.5294H54.9091V57.1765Z" /><path d="M52.5455 73.6471H54.9091V76H52.5455V73.6471Z" /><path d="M54.9091 61.8824H57.2727V64.2353H54.9091V61.8824Z" /><path d="M57.2727 64.2353H59.6364V66.5882H57.2727V64.2353Z" /><path d="M57.2727 54.8235H59.6364V57.1765H57.2727V54.8235Z" /><path d="M57.2727 68.9412H59.6364V71.2941H57.2727V68.9412Z" /><path d="M57.2727 59.5294H59.6364V61.8824H57.2727V59.5294Z" /><path d="M59.6364 66.5882H62V68.9412H59.6364V66.5882Z" /><path d="M59.6364 57.1765H62V59.5294H59.6364V57.1765Z" /><path d="M57.2727 73.6471H59.6364V76H57.2727V73.6471Z" /><path d="M59.6364 61.8824H62V64.2353H59.6364V61.8824Z" /></g></svg>',
    },
];

export default applyFilters(
    `uag_tabs_presets`,
    presets
);
