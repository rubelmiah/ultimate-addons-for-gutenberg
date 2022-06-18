import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

const formsPresets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'bgColor', value: '#ffffff' },
            { label: 'inputborderRadius', value: 2 },
			{ label: 'paddingFieldTop' , value: 12 },
			{ label: 'paddingFieldRight' , value: 12 },
			{ label: 'paddingFieldBottom' , value: 12 },
			{ label: 'paddingFieldLeft' , value: 12 },
			{ label: 'formStyle', value: 'boxed' }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 53C14.8954 53 14 53.8954 14 55C14 56.1046 14.8954 57 16 57H29C30.1046 57 31 56.1046 31 55C31 53.8954 30.1046 53 29 53H22.5H16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M56 42H16V49H56V42ZM56 40H16C14.8954 40 14 40.8954 14 42V49C14 50.1046 14.8954 51 16 51H56C57.1046 51 58 50.1046 58 49V42C58 40.8954 57.1046 40 56 40ZM56 24H16C14.8954 24 14 24.8954 14 26V28C14 29.1046 14.8954 30 16 30H56C57.1046 30 58 29.1046 58 28V26C58 24.8954 57.1046 24 56 24ZM56 26H16V28H56V26ZM56 34H16V36H56V34ZM56 18H16V20H56V18ZM16 16C14.8954 16 14 16.8954 14 18V20C14 21.1046 14.8954 22 16 22H56C57.1046 22 58 21.1046 58 20V18C58 16.8954 57.1046 16 56 16H16ZM14 34C14 32.8954 14.8954 32 16 32H56C57.1046 32 58 32.8954 58 34V36C58 37.1046 57.1046 38 56 38H16C14.8954 38 14 37.1046 14 36V34Z" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'bgColor', value: '#ffffff' },
            { label: 'inputborderRadius', value: 3 },
			{ label: 'paddingFieldTop' , value: 0 },
			{ label: 'paddingFieldRight' , value: 10 },
			{ label: 'paddingFieldBottom' , value: 10 },
			{ label: 'paddingFieldLeft' , value: 0 },
			{ label: 'formStyle', value: 'underlined' }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_179_65" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 38H16V45H56V38ZM16 36C14.8954 36 14 36.8954 14 38V45C14 46.1046 14.8954 47 16 47H56C57.1046 47 58 46.1046 58 45V38C58 36.8954 57.1046 36 56 36H16Z"/><path d="M14 25C14 24.4477 14.4477 24 15 24H57C57.5523 24 58 24.4477 58 25C58 25.5523 57.5523 26 57 26H15C14.4477 26 14 25.5523 14 25Z"/><path d="M14 31C14 30.4477 14.4477 30 15 30H57C57.5523 30 58 30.4477 58 31C58 31.5523 57.5523 32 57 32H15C14.4477 32 14 31.5523 14 31Z"/><path d="M14 53C14 51.8954 14.8954 51 16 51H29C30.1046 51 31 51.8954 31 53C31 54.1046 30.1046 55 29 55H16C14.8954 55 14 54.1046 14 53Z"/><path d="M14 19C14 18.4477 14.4477 18 15 18H57C57.5523 18 58 18.4477 58 19C58 19.5523 57.5523 20 57 20H15C14.4477 20 14 19.5523 14 19Z"/></mask><path d="M16 38V36H14V38H16ZM56 38H58V36H56V38ZM16 45H14V47H16V45ZM56 45V47H58V45H56ZM16 40H56V36H16V40ZM18 45V38H14V45H18ZM56 43H16V47H56V43ZM54 38V45H58V38H54ZM16 38V34C13.7909 34 12 35.7909 12 38H16ZM16 45V38H12V45H16ZM16 45H16H12C12 47.2091 13.7909 49 16 49V45ZM56 45H16V49H56V45ZM56 45V49C58.2091 49 60 47.2091 60 45H56ZM56 38V45H60V38H56ZM56 38H60C60 35.7909 58.2091 34 56 34V38ZM16 38H56V34H16V38ZM15 26H57V22H15V26ZM57 24H15V28H57V24ZM15 24C15.5523 24 16 24.4477 16 25H12C12 26.6569 13.3431 28 15 28V24ZM56 25C56 24.4477 56.4477 24 57 24V28C58.6569 28 60 26.6569 60 25H56ZM57 26C56.4477 26 56 25.5523 56 25H60C60 23.3431 58.6569 22 57 22V26ZM15 22C13.3431 22 12 23.3431 12 25H16C16 25.5523 15.5523 26 15 26V22ZM15 32H57V28H15V32ZM57 30H15V34H57V30ZM15 30C15.5523 30 16 30.4477 16 31H12C12 32.6569 13.3431 34 15 34V30ZM56 31C56 30.4477 56.4477 30 57 30V34C58.6569 34 60 32.6569 60 31H56ZM57 32C56.4477 32 56 31.5523 56 31H60C60 29.3431 58.6569 28 57 28V32ZM15 28C13.3431 28 12 29.3431 12 31H16C16 31.5523 15.5523 32 15 32V28ZM16 53H29V49H16V53ZM29 53H16V57H29V53ZM16 53H16H12C12 55.2091 13.7909 57 16 57V53ZM29 53V57C31.2091 57 33 55.2091 33 53H29ZM29 53H33C33 50.7909 31.2091 49 29 49V53ZM16 49C13.7909 49 12 50.7909 12 53H16V49ZM15 20H57V16H15V20ZM57 18H15V22H57V18ZM15 18C15.5523 18 16 18.4477 16 19H12C12 20.6569 13.3431 22 15 22V18ZM56 19C56 18.4477 56.4477 18 57 18V22C58.6569 22 60 20.6569 60 19H56ZM57 20C56.4477 20 56 19.5523 56 19H60C60 17.3431 58.6569 16 57 16V20ZM15 16C13.3431 16 12 17.3431 12 19H16C16 19.5523 15.5523 20 15 20V16Z"  mask="url(#path-1-inside-1_179_65)"/></svg>',
    }
];

export default applyFilters(
    `uag_forms_presets`,
    formsPresets
);

const buttonsPresets = [
	{
		defaultAttributes
	},
	{
		defaultPresetAttributes: [
            { label: 'submitborderStyle' },
            { label: 'submitborderRadius' },
			{ label: 'submitborderWidth' },
			{ label: 'submitBgColor' },
			{ label: 'submitBgColorHover' },
			{ label: 'submitColor' },
			{ label: 'submitColorHover' },
		]
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'submitborderStyle', value: 'none' },
            { label: 'submitborderRadius', value: 0 },

        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" fill="#CCCCCC"/> <path d="M134.2 146H125.775V129.325H133.975C135.458 129.325 136.617 129.733 137.45 130.55C138.3 131.35 138.725 132.358 138.725 133.575C138.725 134.575 138.442 135.425 137.875 136.125C137.325 136.808 136.642 137.233 135.825 137.4C136.725 137.533 137.483 138 138.1 138.8C138.733 139.583 139.05 140.483 139.05 141.5C139.05 142.833 138.617 143.917 137.75 144.75C136.9 145.583 135.717 146 134.2 146ZM133.375 136.225C134.108 136.225 134.683 136.025 135.1 135.625C135.517 135.225 135.725 134.708 135.725 134.075C135.725 133.425 135.517 132.9 135.1 132.5C134.683 132.1 134.108 131.9 133.375 131.9H128.7V136.225H133.375ZM133.5 143.425C134.3 143.425 134.925 143.225 135.375 142.825C135.825 142.408 136.05 141.833 136.05 141.1C136.05 140.45 135.825 139.908 135.375 139.475C134.925 139.025 134.3 138.8 133.5 138.8H128.7V143.425H133.5ZM152.686 146H150.061V144.4C148.928 145.667 147.503 146.3 145.786 146.3C143.203 146.3 141.911 145.025 141.911 142.475V133.925H144.536V141.525C144.536 142.408 144.744 143.042 145.161 143.425C145.578 143.792 146.178 143.975 146.961 143.975C147.594 143.975 148.186 143.825 148.736 143.525C149.286 143.225 149.728 142.85 150.061 142.4V133.925H152.686V146ZM159.721 146.3C158.704 146.3 157.929 146.033 157.396 145.5C156.879 144.967 156.621 144.2 156.621 143.2V136.225H154.621V133.925H156.621V130.625H159.246V133.925H161.696V136.225H159.246V142.55C159.246 142.983 159.346 143.333 159.546 143.6C159.746 143.85 160.029 143.975 160.396 143.975C160.929 143.975 161.321 143.833 161.571 143.55L162.196 145.525C161.646 146.042 160.821 146.3 159.721 146.3ZM167.704 146.3C166.687 146.3 165.912 146.033 165.379 145.5C164.862 144.967 164.604 144.2 164.604 143.2V136.225H162.604V133.925H164.604V130.625H167.229V133.925H169.679V136.225H167.229V142.55C167.229 142.983 167.329 143.333 167.529 143.6C167.729 143.85 168.012 143.975 168.379 143.975C168.912 143.975 169.304 143.833 169.554 143.55L170.179 145.525C169.629 146.042 168.804 146.3 167.704 146.3ZM177.512 146.3C175.646 146.3 174.146 145.692 173.012 144.475C171.879 143.242 171.312 141.733 171.312 139.95C171.312 138.167 171.879 136.667 173.012 135.45C174.146 134.233 175.646 133.625 177.512 133.625C179.396 133.625 180.904 134.233 182.037 135.45C183.171 136.667 183.737 138.167 183.737 139.95C183.737 141.75 183.171 143.258 182.037 144.475C180.904 145.692 179.396 146.3 177.512 146.3ZM177.512 143.975C178.596 143.975 179.446 143.592 180.062 142.825C180.696 142.042 181.012 141.083 181.012 139.95C181.012 138.833 180.696 137.892 180.062 137.125C179.446 136.342 178.596 135.95 177.512 135.95C176.446 135.95 175.596 136.342 174.962 137.125C174.346 137.892 174.037 138.833 174.037 139.95C174.037 141.083 174.346 142.042 174.962 142.825C175.596 143.592 176.446 143.975 177.512 143.975ZM197.168 146H194.543V138.45C194.543 136.783 193.735 135.95 192.118 135.95C191.485 135.95 190.893 136.108 190.343 136.425C189.793 136.742 189.352 137.125 189.018 137.575V146H186.393V133.925H189.018V135.575C189.468 135.042 190.068 134.583 190.818 134.2C191.568 133.817 192.385 133.625 193.268 133.625C194.552 133.625 195.518 133.958 196.168 134.625C196.835 135.292 197.168 136.25 197.168 137.5V146Z" fill="white"/> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'submitborderStyle', value: 'none' },
			{ label: 'submitborderRadius', value: 5 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" rx="6" fill="#CCCCCC"/> <path d="M134.2 145H125.775V128.325H133.975C135.458 128.325 136.617 128.733 137.45 129.55C138.3 130.35 138.725 131.358 138.725 132.575C138.725 133.575 138.442 134.425 137.875 135.125C137.325 135.808 136.642 136.233 135.825 136.4C136.725 136.533 137.483 137 138.1 137.8C138.733 138.583 139.05 139.483 139.05 140.5C139.05 141.833 138.617 142.917 137.75 143.75C136.9 144.583 135.717 145 134.2 145ZM133.375 135.225C134.108 135.225 134.683 135.025 135.1 134.625C135.517 134.225 135.725 133.708 135.725 133.075C135.725 132.425 135.517 131.9 135.1 131.5C134.683 131.1 134.108 130.9 133.375 130.9H128.7V135.225H133.375ZM133.5 142.425C134.3 142.425 134.925 142.225 135.375 141.825C135.825 141.408 136.05 140.833 136.05 140.1C136.05 139.45 135.825 138.908 135.375 138.475C134.925 138.025 134.3 137.8 133.5 137.8H128.7V142.425H133.5ZM152.686 145H150.061V143.4C148.928 144.667 147.503 145.3 145.786 145.3C143.203 145.3 141.911 144.025 141.911 141.475V132.925H144.536V140.525C144.536 141.408 144.744 142.042 145.161 142.425C145.578 142.792 146.178 142.975 146.961 142.975C147.594 142.975 148.186 142.825 148.736 142.525C149.286 142.225 149.728 141.85 150.061 141.4V132.925H152.686V145ZM159.721 145.3C158.704 145.3 157.929 145.033 157.396 144.5C156.879 143.967 156.621 143.2 156.621 142.2V135.225H154.621V132.925H156.621V129.625H159.246V132.925H161.696V135.225H159.246V141.55C159.246 141.983 159.346 142.333 159.546 142.6C159.746 142.85 160.029 142.975 160.396 142.975C160.929 142.975 161.321 142.833 161.571 142.55L162.196 144.525C161.646 145.042 160.821 145.3 159.721 145.3ZM167.704 145.3C166.687 145.3 165.912 145.033 165.379 144.5C164.862 143.967 164.604 143.2 164.604 142.2V135.225H162.604V132.925H164.604V129.625H167.229V132.925H169.679V135.225H167.229V141.55C167.229 141.983 167.329 142.333 167.529 142.6C167.729 142.85 168.012 142.975 168.379 142.975C168.912 142.975 169.304 142.833 169.554 142.55L170.179 144.525C169.629 145.042 168.804 145.3 167.704 145.3ZM177.512 145.3C175.646 145.3 174.146 144.692 173.012 143.475C171.879 142.242 171.312 140.733 171.312 138.95C171.312 137.167 171.879 135.667 173.012 134.45C174.146 133.233 175.646 132.625 177.512 132.625C179.396 132.625 180.904 133.233 182.037 134.45C183.171 135.667 183.737 137.167 183.737 138.95C183.737 140.75 183.171 142.258 182.037 143.475C180.904 144.692 179.396 145.3 177.512 145.3ZM177.512 142.975C178.596 142.975 179.446 142.592 180.062 141.825C180.696 141.042 181.012 140.083 181.012 138.95C181.012 137.833 180.696 136.892 180.062 136.125C179.446 135.342 178.596 134.95 177.512 134.95C176.446 134.95 175.596 135.342 174.962 136.125C174.346 136.892 174.037 137.833 174.037 138.95C174.037 140.083 174.346 141.042 174.962 141.825C175.596 142.592 176.446 142.975 177.512 142.975ZM197.168 145H194.543V137.45C194.543 135.783 193.735 134.95 192.118 134.95C191.485 134.95 190.893 135.108 190.343 135.425C189.793 135.742 189.352 136.125 189.018 136.575V145H186.393V132.925H189.018V134.575C189.468 134.042 190.068 133.583 190.818 133.2C191.568 132.817 192.385 132.625 193.268 132.625C194.552 132.625 195.518 132.958 196.168 133.625C196.835 134.292 197.168 135.25 197.168 136.5V145Z" fill="white"/> </svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'submitborderStyle', value: 'none' },
			{ label: 'submitborderRadius', value: 30 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" rx="35" fill="#CCCCCC"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="white"/> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'submitborderStyle', value: 'solid' },
			{ label: 'submitborderWidth', value: 1 },
			{ label: 'submitBgColor', value: '#00000000' },
			{ label: 'submitBgColorHover', value: '#3a3a3a' },
			{ label: 'submitColor', value: '#0170b9' },
			{ label: 'submitColorHover', value: '#ffffff' },
			{ label: 'submitborderRadius', value: 0 },

        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="#959595"/> </svg>',
    },
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'submitborderStyle', value: 'solid' },
			{ label: 'submitborderWidth', value: 1 },
			{ label: 'submitBgColor', value: '#00000000' },
			{ label: 'submitBgColorHover', value: '#3a3a3a' },
			{ label: 'submitColor', value: '#0170b9' },
			{ label: 'submitColorHover', value: '#ffffff' },
			{ label: 'submitborderRadius', value: 5 },

        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" rx="5" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="#959595"/> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'submitborderStyle', value: 'solid' },
			{ label: 'submitborderWidth', value: 1 },
			{ label: 'submitBgColor', value: '#00000000' },
			{ label: 'submitBgColorHover', value: '#3a3a3a' },
			{ label: 'submitColor', value: '#0170b9' },
			{ label: 'submitColorHover', value: '#ffffff' },
			{ label: 'submitborderRadius', value: 30 },

        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" rx="34" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 143H125.775V126.325H133.975C135.458 126.325 136.617 126.733 137.45 127.55C138.3 128.35 138.725 129.358 138.725 130.575C138.725 131.575 138.442 132.425 137.875 133.125C137.325 133.808 136.642 134.233 135.825 134.4C136.725 134.533 137.483 135 138.1 135.8C138.733 136.583 139.05 137.483 139.05 138.5C139.05 139.833 138.617 140.917 137.75 141.75C136.9 142.583 135.717 143 134.2 143ZM133.375 133.225C134.108 133.225 134.683 133.025 135.1 132.625C135.517 132.225 135.725 131.708 135.725 131.075C135.725 130.425 135.517 129.9 135.1 129.5C134.683 129.1 134.108 128.9 133.375 128.9H128.7V133.225H133.375ZM133.5 140.425C134.3 140.425 134.925 140.225 135.375 139.825C135.825 139.408 136.05 138.833 136.05 138.1C136.05 137.45 135.825 136.908 135.375 136.475C134.925 136.025 134.3 135.8 133.5 135.8H128.7V140.425H133.5ZM152.686 143H150.061V141.4C148.928 142.667 147.503 143.3 145.786 143.3C143.203 143.3 141.911 142.025 141.911 139.475V130.925H144.536V138.525C144.536 139.408 144.744 140.042 145.161 140.425C145.578 140.792 146.178 140.975 146.961 140.975C147.594 140.975 148.186 140.825 148.736 140.525C149.286 140.225 149.728 139.85 150.061 139.4V130.925H152.686V143ZM159.721 143.3C158.704 143.3 157.929 143.033 157.396 142.5C156.879 141.967 156.621 141.2 156.621 140.2V133.225H154.621V130.925H156.621V127.625H159.246V130.925H161.696V133.225H159.246V139.55C159.246 139.983 159.346 140.333 159.546 140.6C159.746 140.85 160.029 140.975 160.396 140.975C160.929 140.975 161.321 140.833 161.571 140.55L162.196 142.525C161.646 143.042 160.821 143.3 159.721 143.3ZM167.704 143.3C166.687 143.3 165.912 143.033 165.379 142.5C164.862 141.967 164.604 141.2 164.604 140.2V133.225H162.604V130.925H164.604V127.625H167.229V130.925H169.679V133.225H167.229V139.55C167.229 139.983 167.329 140.333 167.529 140.6C167.729 140.85 168.012 140.975 168.379 140.975C168.912 140.975 169.304 140.833 169.554 140.55L170.179 142.525C169.629 143.042 168.804 143.3 167.704 143.3ZM177.512 143.3C175.646 143.3 174.146 142.692 173.012 141.475C171.879 140.242 171.312 138.733 171.312 136.95C171.312 135.167 171.879 133.667 173.012 132.45C174.146 131.233 175.646 130.625 177.512 130.625C179.396 130.625 180.904 131.233 182.037 132.45C183.171 133.667 183.737 135.167 183.737 136.95C183.737 138.75 183.171 140.258 182.037 141.475C180.904 142.692 179.396 143.3 177.512 143.3ZM177.512 140.975C178.596 140.975 179.446 140.592 180.062 139.825C180.696 139.042 181.012 138.083 181.012 136.95C181.012 135.833 180.696 134.892 180.062 134.125C179.446 133.342 178.596 132.95 177.512 132.95C176.446 132.95 175.596 133.342 174.962 134.125C174.346 134.892 174.037 135.833 174.037 136.95C174.037 138.083 174.346 139.042 174.962 139.825C175.596 140.592 176.446 140.975 177.512 140.975ZM197.168 143H194.543V135.45C194.543 133.783 193.735 132.95 192.118 132.95C191.485 132.95 190.893 133.108 190.343 133.425C189.793 133.742 189.352 134.125 189.018 134.575V143H186.393V130.925H189.018V132.575C189.468 132.042 190.068 131.583 190.818 131.2C191.568 130.817 192.385 130.625 193.268 130.625C194.552 130.625 195.518 130.958 196.168 131.625C196.835 132.292 197.168 133.25 197.168 134.5V143Z" fill="#959595"/> </svg>',
    },
];

export {buttonsPresets};
