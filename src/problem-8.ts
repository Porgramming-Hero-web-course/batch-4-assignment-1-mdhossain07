{
    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
        for (let key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }

    type TPerson = {
        name: string;
        age: number;
        email: string;
    }

    const person: TPerson = {name: "Alice", age: 25, email: "alice@example.com"};
    validateKeys<TPerson>(person, ['name', 'age'])
}


