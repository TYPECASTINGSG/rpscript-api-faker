import faker from 'faker';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Faker
 * @namespace Faker 
 * 
 * @description
 * Generation of fake data
 * 
 * @example
 * rps install faker
 * 
 * 
*/
@RpsModule("faker")
export default class RPSFaker {

  /**
 * @function fake
 * @memberof Faker
 * @example
 * ;Generates fake last, first and suffix
 * fake "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"
 * @param {string} text Generate fake data using mustache string format.
 * @returns {*} Fake content.
 * @summary Generate fake data
 * @description Refer to the method Faker.fake() about the usage and the list of API methods
 * 
 * @see {@link https://www.npmjs.com/package/faker}
 * 
*/
  @rpsAction({verbName:'fake'})
  async fake (ctx:RpsContext,opts:Object, text:string) : Promise<string>{
    return faker.fake(text);
  }

}
