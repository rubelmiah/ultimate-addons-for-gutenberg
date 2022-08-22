import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

const presets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'size', value: 20 },
            { label: 'bgSize', value: '' },
			{ label: 'borderRadius', value: 100 },
			{ label: 'border', value: 0 },
			{ label: 'iconColor', value: '#0170B9' },
			{ label: 'iconBgColor', value: '' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 135.771C118.8 133.903 120.222 132.389 121.975 132.389H247.53C249.283 132.389 250.705 133.903 250.705 135.771C250.705 137.639 249.283 139.153 247.53 139.153H121.975C120.222 139.153 118.8 137.639 118.8 135.771Z" fill="#D2D2D2"/> <circle cx="88.361" cy="135.771" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 136.301C95.9485 136.008 95.9485 135.533 95.6556 135.24L90.8827 130.467C90.5898 130.175 90.1149 130.175 89.822 130.467C89.5291 130.76 89.5291 131.235 89.822 131.528L94.0646 135.771L89.822 140.013C89.5291 140.306 89.5291 140.781 89.822 141.074C90.1149 141.367 90.5898 141.367 90.8827 141.074L95.6556 136.301ZM95.1253 135.021H81.5966V136.521H95.1253V135.021Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 189.885C118.8 188.017 120.222 186.503 121.975 186.503H247.53C249.283 186.503 250.705 188.017 250.705 189.885C250.705 191.753 249.283 193.268 247.53 193.268H121.975C120.222 193.268 118.8 191.753 118.8 189.885Z" fill="#D2D2D2"/> <circle cx="88.361" cy="189.885" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 190.416C95.9485 190.123 95.9485 189.648 95.6556 189.355L90.8827 184.582C90.5898 184.289 90.1149 184.289 89.822 184.582C89.5291 184.875 89.5291 185.35 89.822 185.643L94.0646 189.885L89.822 194.128C89.5291 194.421 89.5291 194.896 89.822 195.189C90.1149 195.481 90.5898 195.481 90.8827 195.189L95.6556 190.416ZM95.1253 189.135H81.5966V190.635H95.1253V189.135Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 81.6561C118.8 79.7882 120.222 78.2739 121.975 78.2739H247.53C249.283 78.2739 250.705 79.7882 250.705 81.6561C250.705 83.524 249.283 85.0383 247.53 85.0383H121.975C120.222 85.0383 118.8 83.524 118.8 81.6561Z" fill="#D2D2D2"/> <circle cx="88.361" cy="81.6561" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 82.1863C95.9485 81.8934 95.9485 81.4186 95.6556 81.1257L90.8827 76.3527C90.5898 76.0598 90.1149 76.0598 89.822 76.3527C89.5291 76.6456 89.5291 77.1205 89.822 77.4134L94.0646 81.656L89.822 85.8986C89.5291 86.1915 89.5291 86.6664 89.822 86.9593C90.1149 87.2522 90.5898 87.2522 90.8827 86.9593L95.6556 82.1863ZM95.1253 80.906H81.5966V82.406H95.1253V80.906Z" fill="white"/> </svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'bgSize', value: 10 },
            { label: 'size', value: 20 },
			{ label: 'borderRadius', value: 100 },
			{ label: 'border', value: 0 },
            { label: 'iconColor', value: '#fff' },
			{ label: 'iconBgColor', value: '#0170B9' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 135.771C120.096 133.903 121.517 132.388 123.27 132.388H248.825C250.579 132.388 252 133.903 252 135.771C252 137.639 250.579 139.153 248.825 139.153H123.27C121.517 139.153 120.096 137.639 120.096 135.771Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 189.885C120.096 188.017 121.517 186.503 123.27 186.503H248.825C250.579 186.503 252 188.017 252 189.885C252 191.753 250.579 193.268 248.825 193.268H123.27C121.517 193.268 120.096 191.753 120.096 189.885Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 81.6561C120.096 79.7882 121.517 78.2739 123.27 78.2739H248.825C250.579 78.2739 252 79.7882 252 81.6561C252 83.524 250.579 85.0383 248.825 85.0383H123.27C121.517 85.0383 120.096 83.524 120.096 81.6561Z" fill="#D2D2D2"/> <circle cx="89.6561" cy="81.6561" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="81.656" r="11.2739" fill="white"/> <path d="M96.9507 82.1863C97.2436 81.8934 97.2436 81.4186 96.9507 81.1257L92.1777 76.3527C91.8848 76.0598 91.41 76.0598 91.1171 76.3527C90.8242 76.6456 90.8242 77.1205 91.1171 77.4134L95.3597 81.656L91.1171 85.8986C90.8242 86.1915 90.8242 86.6664 91.1171 86.9593C91.41 87.2522 91.8848 87.2522 92.1777 86.9593L96.9507 82.1863ZM96.4204 80.906H82.8917V82.406H96.4204V80.906Z" fill="#B6B6B6"/> <circle cx="89.6561" cy="135.771" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="135.771" r="11.2739" fill="white"/> <path d="M96.9507 136.301C97.2436 136.008 97.2436 135.533 96.9507 135.24L92.1777 130.467C91.8848 130.175 91.41 130.175 91.1171 130.467C90.8242 130.76 90.8242 131.235 91.1171 131.528L95.3597 135.771L91.1171 140.013C90.8242 140.306 90.8242 140.781 91.1171 141.074C91.41 141.367 91.8848 141.367 92.1777 141.074L96.9507 136.301ZM96.4204 135.021H82.8917V136.521H96.4204V135.021Z" fill="#B6B6B6"/> <circle cx="89.6561" cy="189.885" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="189.885" r="11.2739" fill="white"/> <path d="M96.9507 190.416C97.2436 190.123 97.2436 189.648 96.9507 189.355L92.1777 184.582C91.8848 184.289 91.41 184.289 91.1171 184.582C90.8242 184.875 90.8242 185.35 91.1171 185.643L95.3597 189.885L91.1171 194.128C90.8242 194.421 90.8242 194.896 91.1171 195.189C91.41 195.481 91.8848 195.481 92.1777 195.189L96.9507 190.416ZM96.4204 189.135H82.8917V190.635H96.4204V189.135Z" fill="#B6B6B6"/> </svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'bgSize', value: 10 },
            { label: 'size', value: 20 },
			{ label: 'borderRadius', value: 100 },
			{ label: 'border', value: 2 },
            { label: 'iconColor', value: '#0170B9' },
			{ label: 'iconBorderColor' , value: '#0170B9' },
			{ label: 'iconBgColor', value: '' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 135.771C120.096 133.903 121.517 132.388 123.27 132.388H248.825C250.579 132.388 252 133.903 252 135.771C252 137.639 250.579 139.153 248.825 139.153H123.27C121.517 139.153 120.096 137.639 120.096 135.771Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 189.885C120.096 188.017 121.517 186.503 123.27 186.503H248.825C250.579 186.503 252 188.017 252 189.885C252 191.753 250.579 193.268 248.825 193.268H123.27C121.517 193.268 120.096 191.753 120.096 189.885Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 81.6561C120.096 79.7882 121.517 78.2739 123.27 78.2739H248.825C250.579 78.2739 252 79.7882 252 81.6561C252 83.524 250.579 85.0383 248.825 85.0383H123.27C121.517 85.0383 120.096 83.524 120.096 81.6561Z" fill="#D2D2D2"/> <circle cx="89.6561" cy="81.6561" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="81.656" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 82.1863C97.2436 81.8934 97.2436 81.4186 96.9507 81.1257L92.1778 76.3527C91.8849 76.0598 91.41 76.0598 91.1171 76.3527C90.8242 76.6456 90.8242 77.1205 91.1171 77.4134L95.3598 81.656L91.1171 85.8986C90.8242 86.1915 90.8242 86.6664 91.1171 86.9593C91.41 87.2522 91.8849 87.2522 92.1778 86.9593L96.9507 82.1863ZM96.4204 80.906H82.8917V82.406H96.4204V80.906Z" fill="white"/> <circle cx="89.6561" cy="135.771" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="135.771" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 136.301C97.2436 136.008 97.2436 135.533 96.9507 135.24L92.1778 130.467C91.8849 130.175 91.41 130.175 91.1171 130.467C90.8242 130.76 90.8242 131.235 91.1171 131.528L95.3598 135.771L91.1171 140.013C90.8242 140.306 90.8242 140.781 91.1171 141.074C91.41 141.367 91.8849 141.367 92.1778 141.074L96.9507 136.301ZM96.4204 135.021H82.8917V136.521H96.4204V135.021Z" fill="white"/> <circle cx="89.6561" cy="189.885" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="189.885" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 190.416C97.2436 190.123 97.2436 189.648 96.9507 189.355L92.1778 184.582C91.8849 184.289 91.41 184.289 91.1171 184.582C90.8242 184.875 90.8242 185.35 91.1171 185.643L95.3598 189.885L91.1171 194.128C90.8242 194.421 90.8242 194.896 91.1171 195.189C91.41 195.481 91.8849 195.481 92.1778 195.189L96.9507 190.416ZM96.4204 189.135H82.8917V190.635H96.4204V189.135Z" fill="white"/> </svg>',
    }

];

export default applyFilters(
    `uag_icon_list_presets`,
    presets
);
