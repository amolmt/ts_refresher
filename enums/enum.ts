enum Direction {
  Up,
  Down,
  Left,
  Right,
}

/* 
Up = 0
Down = 1
Left = 2
Right = 3
*/

enum DirectionOne {
  Up = 1,
  Down,
  Left,
  Right,
}

/* 
Up = 1
Down = 2
Left = 3
Right = 4
*/

// string enums

enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// heterogeneous enums

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
