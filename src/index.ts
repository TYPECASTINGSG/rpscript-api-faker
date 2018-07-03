/**
 * @module Faker
 */

import faker from 'faker';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("faker")
export default class RPSFaker {

  @rpsAction({verbName:'fake'})
  async fake (ctx:RpsContext,opts:Object, text:string) : Promise<string>{
    return faker.fake(text);
  }

}
