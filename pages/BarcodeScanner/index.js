  import React, { Component } from 'react'
import Scanner from '../../src/Components/barcode/Scanner'

class BarcodeScanner extends Component {
  state = {
    results: [],
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = result => {
    this.setState({ results: [] })
    this.setState({ results: this.state.results.concat([result]) })
  }

  render() {
    return (
      <div>
        <span style={{ marginRight: 10 }} color="secondary">
        </span>

        <span>Barcode Scanner</span>

        <div variant="outlined" style={{ marginTop: 30, width: 640, height: 320 }}>
          <Scanner onDetected={this._onDetected} />
        </div>

        <textarea
          style={{ fontSize: 32, width: 320, height: 100, marginTop: 30 }}
          defaultValue={'No data scanned'}
          value={this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}
        />

      </div>
    )
  }
}

export default BarcodeScanner
