interface Profile {
    name: string;
    age: number;
    email: string;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

const updateProfile  =(obj: Profile, property: Partial<Profile>) => {
    return {...obj, ...property}
}

updateProfile(myProfile, {age: 26})