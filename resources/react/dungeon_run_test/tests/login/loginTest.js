import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount , shallow } from 'enzyme';
import Login from '../../components/login/login';

describe('Test login page', () => {
	it('Wrong login should fail', () => {
		const wrapper = mount(<Login />);
	})
});