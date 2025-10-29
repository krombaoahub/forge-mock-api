// global.d.ts
import { IStaticMethods } from "flyonui/flyonui";
import $ from "jquery";
import _ from 'lodash';

declare global {
    interface Window {
        // Optional third-party libraries
        _: typeof _;
        $: typeof $;
        jQuery: typeof $;
        // DataTable;
        // Dropzone;

        HSStaticMethods: IStaticMethods;
    }
}

export { };