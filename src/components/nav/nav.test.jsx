/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { faHome, faAd } from '@fortawesome/free-solid-svg-icons'
import Nav from '.'

describe('<Nav/>', () => {
  function FooComponent () {
    return <div>Hello Foo!</div>
  }
  function BarComponent () {
    return <div>Hello Bar!</div>
  }

  const tabs = {
    Foo: { icon: faHome, tab: FooComponent },
    Bar: { icon: faAd, tab: BarComponent }
  }

  const onTabClickSpy = jest.fn()

  test('Rendering mobile web', () => {
    const component = renderer.create(
      <Nav isMobileNavOpen handleOnTabClick={onTabClickSpy} selectedTab='Home' tabs={tabs} />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()

    component.root.findAllByType('button')[0].props.onClick()
    expect(onTabClickSpy).toHaveBeenCalledWith('Foo')
  })

  test('Rendering desktop web', () => {
    const component = renderer.create(
      <Nav isMobileNavOpen={false} handleOnTabClick={jest.fn} selectedTab='Bar' tabs={tabs} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
