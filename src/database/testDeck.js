const DECKS = {
  0: /* 21 */ [9, 7, 5, 7],
  1: /* 버스트 */ ["K", "K", "K", 6, "K"],
  blackjack: /* 블랙잭 */ {
    0: /* 즉시 승리 */ ["A", 6, "K"],
    1: /* 승리 */ ["A", "A", "K", 2],
    2: /* 비김 */ ["A", "K", "K", "A"],
    3: /* 딜러 승리 */ [9, "A", 5, 7, "K"],
  },
  double: /* 더블 */ {
    0: [6, 6, 5],
  },
  split: /* 스플릿 */ {
    0: /* 21 */ [6, 5, 6, 5, 10],
    1: /* 버스트 */ [8, 10, 8, 4, 10],
    blackjack: /* 블랙잭 */ {
      0: /* 즉시 승리 */ ["A", 9, "A", "K", "K", 9],
      1: /* 둘다 승리 */ ["A", "A", "A", "K", "K", 9],
      2: /* 하나 승리 */ ["A", "J", "A", 9, "Q", 6, 5],
    },
    double: /* 더블 */ {
      0: [8, 6, 8, 3, 2],
    },
    split: /* 스플릿 후 스플릿 */ {
      0: /* 4개의 핸드 */ [8, 10, 8, 8, 9, 10, 8, 4, 8, 3, 10, 9],
      1: /* A */ ["A", 6, "A", "A"],
      2: /* 디자인 */ [8, 10, 8, 8, 4, 2, 3, 4, 2, 4, 8, 5, 3, 4, 3, 10, 9],
      3: /* 디자인 */ [2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    },
  },
}

export default () => DECKS[-1] || []
