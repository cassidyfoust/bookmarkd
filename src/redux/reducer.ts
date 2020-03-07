export default function reducer(
    state = {},
    {type, payload}: {type: string, payload: any}
    ): any {
        switch(type){
            case 'SET_USER_STATE':
                return {
                    ...state,
                    userData: payload
                }
        }
        switch (type) {
          case "SET_BOOKS":
            return {
              ...state,
              randomBooks: payload
            };
        }
        return state
    }