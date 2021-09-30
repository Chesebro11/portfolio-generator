const profileDataArgs = process.argv.slice(2, process.argv.length);

// forEach is the same as for loops to iterate through things however it looks cleaner and meant specifically for arrays






const printProfileData = profileDataArr => {
    // This
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log('=================');

    // Is the same as this
    profileDataArr.forEach(prfileItem => console.log(profileItem));
    };

printProfileData(profileDataArgs);