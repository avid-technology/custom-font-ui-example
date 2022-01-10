/**
 * Copyright 2019-2021 by Avid Technology, Inc.
 */
import { getLocalization } from './localization';
import l10nData from '../l10n/lang.en.json';
import * as styles from './index.scss';

export default class ApplicationContainer {
    getTitle() {
        return 'Your first AVID app title';
    }

    render(element) {
        element.classList.add(styles.test);
        element.innerHTML = getLocalization(l10nData)('styled-string');
        element.innerHTML = getLocalization(l10nData)('styled-string') + "<div>" +
        getLocalization(l10nData)('one-more-styled-string') +
            "</div>";
    }
}
