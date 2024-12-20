import LocalizedStrings from 'react-native-localization'
import { stringsEN } from './english'
import { stringsEN_US } from './english-US'
import { stringsNB } from './norwegian'

const strings = (param1?: string, param2?: string) => new LocalizedStrings({
    'en-US': stringsEN_US(param1, param2),
    'en': stringsEN(param1, param2),
    'nb': stringsNB(param1, param2),
});

const localizedStrings = strings();

export { localizedStrings, strings };
