export const FAILS_DATA = {
  data: {
    failInfos: [
      {
        failId: 1,
        content: 'Failure example 1',
        backgroundType: 'A',
        goodCount: 2,
        talentCount: 0,
        pellikeonCount: 0,
        drinkCount: 0,
        clickedEmoji: 'DRINK',
      },
      {
        failId: 2,
        content: 'Failure example 2',
        backgroundType: 'B',
        goodCount: 0,
        talentCount: 2,
        pellikeonCount: 0,
        drinkCount: 0,
        clickedEmoji: 'DRINK',
      },
      {
        failId: 3,
        content: 'Failure example 3',
        backgroundType: 'C',
        goodCount: 0,
        talentCount: 0,
        pellikeonCount: 2,
        drinkCount: 0,
        clickedEmoji: 'DRINK',
      },
      {
        failId: 4,
        content: 'Failure example 4',
        backgroundType: 'A',
        goodCount: 0,
        talentCount: 0,
        pellikeonCount: 2,
        drinkCount: 0,
        clickedEmoji: 'DRINK',
      },
    ],
  },
};

export const GetAllFails = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAILS_DATA.data.failInfos);
    }, 100);
  });
};

export const GetFailById = async (failId: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failInfo = FAILS_DATA.data.failInfos.find((fail) => fail.failId === failId);
      if (failInfo) {
        resolve(failInfo);
      } else {
        reject(new Error('해당 ID의 실패 정보가 없습니다.'));
      }
    }, 100);
  });
};

export const PostFail = async (
  newFailInfo: Omit<(typeof FAILS_DATA.data.failInfos)[0], 'failId'>
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newId = FAILS_DATA.data.failInfos.length + 1;
      const newFail = { failId: newId, ...newFailInfo };
      FAILS_DATA.data.failInfos.push(newFail);
      resolve(newFail);
    }, 100);
  });
};

export const PutFail = async (
  failId: number,
  updatedData: Partial<(typeof FAILS_DATA.data.failInfos)[0]>
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failIndex = FAILS_DATA.data.failInfos.findIndex((fail) => fail.failId === failId);
      if (failIndex !== -1) {
        FAILS_DATA.data.failInfos[failIndex] = {
          ...FAILS_DATA.data.failInfos[failIndex],
          ...updatedData,
        };
        resolve(FAILS_DATA.data.failInfos[failIndex]);
      } else {
        reject(new Error('해당 ID의 실패 정보를 찾을 수 없습니다.'));
      }
    }, 100);
  });
};

export const DeleteFail = async (failId: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failIndex = FAILS_DATA.data.failInfos.findIndex((fail) => fail.failId === failId);
      if (failIndex !== -1) {
        FAILS_DATA.data.failInfos.splice(failIndex, 1);
        resolve(`failId ${failId}가 삭제되었습니다.`);
      } else {
        reject(new Error('해당 ID의 실패 정보를 찾을 수 없습니다.'));
      }
    }, 100);
  });
};
