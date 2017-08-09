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


        <PostTemplate
          handleClose={this.handleClose.bind(this)}
          handleOpen={this.handleOpen.bind(this)}
          isOpenTemplate={this.state.isOpenTemplate}
        ></PostTemplate>


        <FloatingActionButton style={styles.floatingAction} secondary={true} onClick={this.handleOpen.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>
      </div>