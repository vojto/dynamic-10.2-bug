import dynamic from 'next/dynamic'

const SomeDynamicComp = dynamic(() =>
  import('./some-dynamic-comp').then((mod) => mod.SomeDynamicComp), {ssr: false})

export function SomeComp () {
  return (
    <div>
      Hello world
      <SomeDynamicComp />
    </div>
    )
}
