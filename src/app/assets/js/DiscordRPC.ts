import { Client, Presence, RPCClientOptions } from 'discord-rpc'

class DiscordRPC{
  private static client:Client
  private static startTime:Date = new Date()
  public static async init(clientId:string):Promise<void>{
    this.client = new Client({transport:'ipc'})
    await this.client.login({clientId:clientId})
  }

  public static async setActivity(option:Presence):Promise<void>{
    option.startTimestamp = this.startTime
    await this.client.setActivity(option)
  }
  public static async setDefault(){
    this.client.setActivity({
      details: 'In Menu',
      state: 'SasaLauncher2 v1.0.0',
      startTimestamp:this.startTime,
      largeImageKey: 'icon',
      largeImageText: 'SasaLauncher2'
    })
  }
}

export {
  DiscordRPC
}