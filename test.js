    <ResponsiveReactGridLayout className="layout" layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          
          >
          <div key={'1'}>
            <div style={styles.div} key={'1'}> </div>
          </div>
          <div key={'2'}>
            <div style={styles.div} key={'2'}> </div>
          </div>
          <div key={'3'}>
            <div style={styles.div} key={'3'}> </div>
          </div>

        </ResponsiveReactGridLayout>

        <img src={post.imageUrl} alt={post.title} style={styles.image} />


        <div style={styles.code}>
        <MyCodeMirror ref="editor"
          code={this.props.postR.post.Content}
          updateCode={(newcode) => this.handleUpdateCode(newcode)}
          width='100%'
          height='100%'
        ></MyCodeMirror>
      </div>



      <div style={styles.result}>
        <MarkDownShower
          input={this.state.text}
        ></MarkDownShower>
      </div>




      <Route path="/main" component={MainSystem}></Route>