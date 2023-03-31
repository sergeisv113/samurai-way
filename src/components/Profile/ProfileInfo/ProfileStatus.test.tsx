import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileStatus} from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'It-kam'} updateStatus={()=>{}}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance?.state.status).toBe('It-kam')
    })
    test('after creation <input> should be displayed ', () => {
        const component = create(<ProfileStatus status={'It-kam'} updateStatus={()=>{}}/>)
        const root = component.root
        expect(root.findByType("span")).not.toBeNull()
    })
    test('after creation <span>  should contains  correct status', () => {
        const component = create(<ProfileStatus status={'It-kam'} updateStatus={()=>{}}/>)
        const root = component.root

        let span = root.findByType('span')
        // @ts-ignore
        expect(span.children[0]).toBe('It-kam')
    })
    test('after creation <input> should be displayed ', () => {
        const component = create(<ProfileStatus status={'It-kam'} updateStatus={()=>{}}/>)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test(' <input> should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'It-kam'} updateStatus={()=>{}}/>)

        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')

        expect(input.props.value).toBe('It-kam')
    })
    test('callback should be called', () => {
        const fackeCallBack = jest.fn()
        const component = create(<ProfileStatus status={'It-kam'} updateStatus={fackeCallBack}/>)
const instance = component.getInstance()
        // @ts-ignore
        instance?.deactivateEditeMode()
        expect(fackeCallBack.mock.calls.length).toBe(1)
    })
})