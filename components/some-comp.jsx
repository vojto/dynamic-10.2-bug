import dynamic from 'next/dynamic'

const SomeDynamicComp = dynamic(() =>
  import('./some-dynamic-comp').then((mod) => mod.SomeDynamicComp))

export function SomeComp () {
  return (
    <div>
      Hello world
      <SomeDynamicComp />
    </div>
    )
}
