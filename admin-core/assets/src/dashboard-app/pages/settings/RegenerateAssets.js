import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

const RegenerateAssets = () => {

    const [ regenerateAssetsState, setRegenerateAssetsState ] = useState( false );

    const regenerateAssets = () => {
        setRegenerateAssetsState( 'loading' );
        const formData = new window.FormData();
		formData.append( 'action', 'uag_regenerate_assets' );
		formData.append( 'security', uag_react.regenerate_assets_nonce );
		formData.append( 'value', true );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
            if ( data.success ) {
                setTimeout( function () {
					setRegenerateAssetsState( false );
				}, 2000 );
				setRegenerateAssetsState( true );
			}
		} );
    };

    return (
        <section className='block border-b border-solid border-slate-200 p-6 justify-between'>  
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-6 font-medium text-gray-900">
                    { __( 'Asset Regeneration', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <div className='flex justify-right items-center'>
                    { true === regenerateAssetsState && (
                        <p className='text-sm text-lime-600 pr-2'>
                            { __( 'Assets Regenerated!', 'ultimate-addons-for-gutenberg' ) }
                        </p>
                    ) }
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none"
                        onClick={ regenerateAssets }
                    >
                        { 'loading' === regenerateAssetsState && (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) }
                        { __( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' ) }
                    </button>
                </div>
            </div>
            <p className="mt-2 w-9/12 text-sm">
                { __( 'Facing issues with style, layout, color or another page element? Use this option to regenerate CSS and Javascript assets. It can help with all kinds of asset issues.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default RegenerateAssets;
