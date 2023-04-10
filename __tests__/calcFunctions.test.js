import weightLossProjection from '../utils/calcFunctions.js'

describe ('percentage weightloss calculations', () => {
    test('calculate 0.5 weightloss a week projected for 6 weeks', () => {
        expect(weightLossProjection('metric', 0.5, 90, 6)).ToBe(
            [
             90
            ,89.55
            ,89.10
            ,88.66
            ,88.21
            ,87.77])
    }) 
})