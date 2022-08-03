// Synchronous

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// Asynchronous

console.log("1");
console.log("2");
setTimeout(() =>
{
    console.log("3");
}, 3000)
console.log("4");
console.log("5");

// Callbacks
function one(call2)
{
    console.log("1");
    call2()
}

function two()
{
    console.log("2");
}

one(two)

// Callbacks again
let production = () =>
{

    setTimeout(() =>
    {
        console.log("production has started")
        setTimeout(() =>
        {
            console.log("The fruit has been chopped")
            setTimeout(() =>
            {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(() =>
                {
                    console.log("start the machine")
                    setTimeout(() =>
                    {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`)
                        setTimeout(() =>
                        {
                            console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(() =>
                            {
                                console.log("serve Ice cream")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)

};

// Promises
let is_shop_open = true;
let order = (time, work) =>
{
    return new Promise((resolve, reject) =>
    {
        if (is_shop_open)
        {
            setTimeout(() =>
            {
                resolve(work())
            }, time)

        }
        else
        {
            reject(console.log("Our shop is closed"))
        }
    })
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    .then(() =>
    {
        return order(0000, () => console.log('production has started'))
    })
    .then(() =>
    {
        return order(2000, () => console.log("Fruit has been chopped"))
    })
    .then(() =>
    {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
    })
    .then(() =>
    {
        return order(1000, () => console.log("start the machine"))
    })
    .then(() =>
    {
        return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
    })
    .then(() =>
    {
        return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
    })
    .then(() =>
    {
        return order(2000, () => console.log("Serve Ice Cream"))
    })
    .catch(() =>
    {
        console.log("Customer left") //only when error
    })
    .finally(() =>
    {
        console.log("end of day")
    })

// Async/Await

function time(ms)
{
    return new Promise((resolve, reject) =>
    {
        if (is_shop_open)
        {
            setTimeout(resolve, ms);
        }
        else
        {
            reject(console.log("Shop is closed"))
        }
    });
}

async function kitchen()
{
    try
    {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000)
        console.log("production has started")

        await time(2000)
        console.log("fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await time(2000)
        console.log("Serve Ice Cream")
    }

    catch (error)
    {
        console.log("customer left")
    }
}