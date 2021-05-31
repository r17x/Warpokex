%%raw(`import './Index.css';`)

ReactExperimental.renderConcurrentRootAtElementWithId(
  <RescriptReactErrorBoundary
    fallback={e => {
      e->Js.log
      <div> {"Purely Error"->React.string} </div>
    }}>
    <RescriptRelay.Context.Provider environment=Env.Relay.environment>
      <App />
      <React.Suspense fallback={"Loading..."->React.string}>
        <PokemonList first=5 />
      </React.Suspense>
    </RescriptRelay.Context.Provider>
  </RescriptReactErrorBoundary>,
  "root",
)
