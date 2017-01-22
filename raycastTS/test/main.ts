declare let QUnit: any;

import { Grid } from '../app/model/grid';
var testGrid = new Grid<string>(3, 3);
testGrid.add("a", 0, 0);
testGrid.add("b", 1, 0);
testGrid.add("c", 2, 0);
testGrid.add("d", 0, 1);
testGrid.add("e", 1, 1);
testGrid.add("f", 2, 1);

testGrid.add("g", 0, 2);
testGrid.add("h", 1, 2);
testGrid.add("i", 2, 2);


QUnit.test("test get x=1 y=1 expecting 'e'", (assert) => {
    var x = testGrid.get(1, 1); 
    assert.ok(x == "e", "Passed!");
});

QUnit.test("test treverse test expect 'test_1_1'", (assert) => {
    
    testGrid.gridTraverse(
        (n, x, y) => {
            testGrid.add(`test_${x}_${y}`, x, y);
        },
        () => { });
    var x = testGrid.get(1, 1);
    assert.ok(x == "test_1_1", "Passed!");
});