const rewire = require("rewire")
const index = rewire("./index")
const hasErrors = index.__get__("hasErrors")
const mapStateToProps = index.__get__("mapStateToProps")
// @ponicode
describe("hasErrors", () => {
    test("0", () => {
        let callFunction = () => {
            hasErrors({ key4: "192.168.99.101", 7: "192.168.99.101" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            hasErrors({ key4: "192.168.99.101", 7: "150.151.152.153" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            hasErrors({ key4: "1.2.3.4", 7: "1.2.3.4" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            hasErrors({ key4: "1.2.3.4", 7: "192.168.99.101" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            hasErrors({ key4: "150.151.152.153", 7: "192.168.99.101" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            hasErrors(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ topicsReducer: "user-name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ topicsReducer: 123 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ topicsReducer: "username" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ topicsReducer: "user123" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ topicsReducer: "user name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
