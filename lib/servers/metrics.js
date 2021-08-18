const PublicNetwork = require('./publicNetwork')
const ServerType = require('../serverTypes/serverType')
const Datacenter = require('../datacenters/datacenter')
const Image = require('../images/image')
const ISO = require('../isos/iso')
const Traffic = require('./traffic')
const PrivateNetwork = require('./privateNetwork')

class Server {
  constructor (endpoint, metrics) {
    this.endpoint = endpoint

    this.id = metrics.id
  }

  changeName (name) {
    return this.endpoint.changeName(this.id, name)
  }

  delete () {
    return this.endpoint.delete(this.id)
  }

  getActions (params) {
    return this.endpoint.actions.list(this.id, params)
  }

  getAction (id) {
    return this.endpoint.actions.get(this.id, id)
  }

  powerOn () {
    return this.endpoint.actions.powerOn(this.id)
  }

  powerOff () {
    return this.endpoint.actions.powerOff(this.id)
  }

  reboot () {
    return this.endpoint.actions.reboot(this.id)
  }

  reset () {
    return this.endpoint.actions.reset(this.id)
  }

  shutdown () {
    return this.endpoint.actions.shutdown(this.id)
  }

  resetPassword () {
    return this.endpoint.actions.resetPassword(this.id)
  }

  enableRescue (type, sshKeys) {
    return this.endpoint.actions.enableRescue(this.id, type, sshKeys)
  }

  disableRescue () {
    return this.endpoint.actions.disableRescue(this.id)
  }

  createImage (type, description) {
    return this.endpoint.actions.createImage(this.id, type, description)
  }

  rebuild (image) {
    return this.endpoint.actions.rebuild(this.id, image)
  }

  changeType (serverType, upgradeDisk) {
    return this.endpoint.actions.changeType(this.id, serverType, upgradeDisk)
  }

  enableBackup (backupWindow) {
    return this.endpoint.actions.enableBackup(this.id, backupWindow)
  }

  disableBackup () {
    return this.endpoint.actions.disableBackup(this.id)
  }

  attachISO (iso) {
    return this.endpoint.actions.attachISO(this.id, iso)
  }

  detachISO () {
    return this.endpoint.actions.detachISO(this.id)
  }

  changeProtection (data) {
    return this.endpoint.actions.changeProtection(this.id, data)
  }

  requestConsole () {
    return this.endpoint.actions.requestConsole(this.id)
  }

  attachToNetwork (networkId, ip, aliasIps) {
    return this.endpoint.actions.attachToNetwork(this.id, networkId, ip, aliasIps)
  }

  detachFromNetwork (networkId) {
    return this.endpoint.actions.detachFromNetwork(this.id, networkId)
  }
}

module.exports = Server
