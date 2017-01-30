/* ICONS: http://simplelineicons.com/ */


export const SKILLS_LIST = [
    {
        name: "Timestop",
        desc: "With a mere snap of your fingers, you stop time throughout the world",
        mechanic: "Stops progress bar for { X } seconds",
        cost: {
            faith: {value: -50},
        },
        icon: "timestop"
    },
    {
        name: "Sacrifice",
        desc: "A boon comes with a great price. Demand an offer from your servants, and maybe you will reward them",
        mechanic: "Add a secondary attribute to your artifact. [Cap: { X }] If at cap, replace a random secondary attribute with a new one instead",
        cost: {
            faith: {value: -100},
            food: {value: -50}
        },
        icon: "sacrifice"
    }
]
/*
export const SKILLS_LIST = [
    {
        name: "Military",
        icon: "fire"
    },
    {
        name: "Infrastructure",
        icon: "layers"
    },
    {
        name: "Housing",
        icon: "home"
    },
    {
        name: "Agriculture",
        icon: "direction"
    },
    {
        name: "Craftsmanship",
        icon: "wrench"
    },
    {
        name: "Science",
        icon: "graduation"
    },
    {
        name: "Culture",
        icon: "badge"
    },
    {
        name: "Religion",
        icon: "people"
    }
]
*/