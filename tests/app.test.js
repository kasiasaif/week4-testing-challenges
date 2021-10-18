const { TestWatcher } = require('@jest/core');
let app = require('../app')
// console.log(app.array);

it('should equal 11 when passed 2 and 9', ()=>{

    expect(app.add(2,9)).toBe(11);
    //We make our assertion here
});

test('array should contain "Tex', ()=>{

    expect(app.array).toContain("Tex");
    //We make our assertion here
});

test('shoudnt return null', ()=>{

    expect(app.fun1("Kasia")).not.toBe(null);
    expect(app.fun1()).not.toBeNull();

    // We make our assertion here
});
// test('value should be true', ()=>{

//     expect(app.fun1("Kasia")).toContain("Kasia");
//     //We make our assertion here
// });
// test('value should be not falsy', ()=>{

//     expect(app.fun1()).not.toBeThruly();
//     //We make our assertion here
// });
test('should contain values model && year', ()=>{

    expect(app.myCar).toEqual({ model: "Mercedes", year: 2021 });
    //We make our assertion here
});
test('should convert number to string', ()=>{

    expect(app.convert(42)).toBe('42' );
    //We make our assertion here
});
test('planet(3) sould dispay Earth', ()=>{

    expect(app.solarSystem(3)).toEqual('Earth');
    //We make our assertion here
});
test('should return 3 items', ()=>{

    expect(app.sixOrMore()).toEqual(3);
    //We make our assertion here
});
test('should return 7', ()=>{

    expect(app.student()).toEqual(7);
    //We make our assertion here
});
test('when give 5 should retur 25', ()=>{

    expect(app.square(5)).toEqual(25);
    //We make our assertion here
});
test('should return 17 when 1789', ()=>{

    expect(app.century(1789)).toEqual(17);
    //We make our assertion here
});
test('should return 1 when [0,0,0,1]', ()=>{

    expect(app.convert2([0,0,0,1])).toEqual(1);
    //We make our assertion here
});