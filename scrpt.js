console.time("Time taken:")

const path = document.querySelector("svg>path")

function getPathData(path) {
    let x = path.getAttribute("d").split("")

    let y = []
    let z = []
    for (let i = 0; i < x.length; i++) {
        if (x[i].charCodeAt(0) === 32) {
            y.push(parseFloat(z.join("")))
            z.length = 0
            y.push(x[i])
        }
        if (x[i].charCodeAt(0) >= 65 && x[i].charCodeAt(0) <= 122) {
            if (z.length > 0) {
                y.push(parseFloat(z.join("")))
                z.length = 0
            }
            y.push(x[i])
        } else if (
            (x[i].charCodeAt(0) >= 48 && x[i].charCodeAt(0) <= 57) ||
            x[i].charCodeAt(0) === 46
        ) {
            z.push(x[i])
        }
    }
    return y
}

function setPathData(path, pathData) {
    path.setAttribute("d", pathData.join(""))
}

const pathData = getPathData(path)

function animate() {
    pathData[1] += 0.1
    setPathData(path, pathData)
    if (pathData[1] < 84) {
        requestAnimationFrame(animate)
    }
}

animate()
console.timeEnd("Time taken:")
