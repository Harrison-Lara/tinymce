test(
  'ImperaTest',

  [
    'ephox.scullion.Struct',
    'ephox.snooker.api.Structs',
    'ephox.snooker.model.Impera'
  ],

  function (Struct, Structs, Impera) {
    var inputRangeStruct = Struct.immutableBag([ 'startCol', 'startRow', 'finishCol', 'finishRow' ], []);

    var structureA = [
      [ 'a', 'b', 'c' ],
      [ 'd', 'e', 'f']
    ];

    var rangeA = Structs.bounds({
      startCol: 0,
      startRow: 0,
      finishCol: 1,
      finishRow: 0
    });

    var leadCellA = 'a';
    var resultA = Impera.render(structureA, rangeA, leadCellA);
    var expectedA = [
      [ 'a', 'a', 'c' ],
      [ 'd', 'e', 'f' ]
    ];
    assert.eq(expectedA, resultA);


    var structureB = [
      [ 'a', 'b', 'c' ],
      [ 'd', 'e', 'f']
    ];

    var rangeB = Structs.bounds({
      startCol: 0,
      startRow: 0,
      finishCol: 2,
      finishRow: 1
    });

    var leadCellB = 'a';
    var resultB = Impera.render(structureB, rangeB, leadCellB);
    var expectedB = [
      [ 'a', 'a', 'a' ],
      [ 'a', 'a', 'a' ]
    ];
    assert.eq(expectedB, resultB);



  }
);