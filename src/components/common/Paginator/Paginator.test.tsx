import React from "react";
import {create} from "react-test-renderer";
import {Paginator} from "./Paginator";

describe('paginator component test', ()=> {
    test('pages count is 6 but should be showed only 5', ()=>{
        const component = create(<Paginator totalItemsCount={6} currentPage={5} pageSize={1} onChangedPageHandler={()=>{}}/>)
        const root = component.root
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(5)
    })
    test('if pages is more then 5 button NEXT count is 6 but should be present', ()=>{
        const component = create(<Paginator totalItemsCount={6} currentPage={5} pageSize={1} onChangedPageHandler={()=>{}}/>)
        const root = component.root
        let button = root.findAllByType('button')
        expect(button.length).toBe(2)
    })
})
