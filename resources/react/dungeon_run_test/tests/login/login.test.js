import React from 'react';
import { mount , shallow } from 'enzyme';
import Login from '../../components/login/login';

const unCompare = 'admin';
const pwCompare = 'password';

describe('Test updateVal successful updates state username and password', ()=> {
    let login = mount(<Login />);

    beforeEach( ()=> {
        login.find('#userName').simulate('change', {
            target: { value: 'admin'}
        })
        login.find('#password').simulate('change', {
            target: { value: 'password'} 
        })
    });

    it('expect login to match unCompare', ()=> {
        //console.log(login.state());
        expect(login.state().un).toEqual(unCompare);
    })

    it('expect password to match pwCompare', ()=> {
        expect(login.state().pw).toEqual(pwCompare);
    })

    it('expect error to be empty / have no length', ()=> {
        expect(login.state().error.length).toEqual(0);
    })
});


describe('Test Failed Username and Password results', ()=> {
    let login = shallow(<Login />);

    describe(' with correct username but wrong password', ()=> {
        beforeEach( ()=> {
            login.find('#userName').simulate('change', {
                target: { value: 'admin'}
            })
            login.find('#password').simulate('change', {
                target: { value: 'pass'} 
            })
            login.find('#loginSubmit').simulate('click');
            login.instance().validateLogin();
        })

        it('expect loginerror', ()=> {
            console.log( login.state() );
            expect(login.state().error.length).not.toEqual(0);
        })
    })
})



