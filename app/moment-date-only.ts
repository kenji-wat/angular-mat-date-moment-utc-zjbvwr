// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
export class MomentConstructor
{
    static getInstance() {
        const original = _rollupMoment || _moment;
        original.prototype.toJSON = function() {
            return this.format("YYYY-MM-DD");
        }
        return original;
    }
}

//export the typing for Moment so it is easier to import into other classes
export interface Moment extends _moment.Moment {}