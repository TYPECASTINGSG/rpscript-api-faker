import {expect} from 'chai';
import m from 'mocha';

import RPSFaker from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Faker', () => {

  m.it('should gen fake name', async function () {
    let md = new RPSFaker;

    let output = await md.fake(new RpsContext,{},"{{name.lastName}}, {{name.firstName}} {{name.suffix}}");

    console.log(output);

  }).timeout(0);

})
