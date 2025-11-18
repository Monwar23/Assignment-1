
const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {
    const combined = [...arr1, ...arr2];
    const result: (string | number)[] = [];

    for (let i = 0; i < combined.length; i++) {
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === combined[i]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(combined[i]);
        }
    }

    return result;
}
