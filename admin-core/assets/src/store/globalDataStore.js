import { createStore } from 'redux';
import globalDataReducer from './globalDataReducer';

const initialState = {
    initialStateSetFlag : false,
    activeBlocksFilterTab : 'all',
    activeSettingsNavigationTab : '',
    blocksStatuses : [],
    enableFileGeneration : '',
    enableTemplates : '',
    enableBeta : '',
    enableSelectedFontFamilies : '',
    selectedFontFamilies : '',
    enableLoadFontsLocally : '',
    enablePreloadLocalFonts : '',
    enableCollapsePanels : '',
    enableCopyPasteStyles : '',
    enableDisplayConditions : '',
    enableMasonryExtension : '',
	enableResponsiveConditions : '',
	contentWidth: '',
	siteKeyV2: '',
	siteKeyV3: '',
	secretKeyV2: '',
	secretKeyV3: '',
	settingsSavedNotification: false,
	enableComingSoonMode: 'disabled',
	comingSoonPage: '',
	blocksEditorSpacing: '',
	containerGlobalPadding: '',
    enableFontAwesome5: ( 'yes' === uag_react.global_data.uagb_old_user_less_than_2 ) ? 'enabled' : 'disabled',
    enableAutoBlockRecovery: ( 'yes' === uag_react.global_data.uagb_old_user_less_than_2 ) ? 'enabled' : 'disabled',
};

const globalDataStore = createStore(
    globalDataReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default globalDataStore;