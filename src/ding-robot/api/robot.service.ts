import { Injectable } from '@nestjs/common';
import { post } from '../../hooks/axios/index';

@Injectable()
export class RobotService {
  /**
   * 机器人接口url
   */
  RobotURL =
    'https://oapi.dingtalk.com/robot/send?access_token=f9efa49ebc412d15a615736288e601ed29980588a681e5f9f480ad022cc6d497';

  /**
   * 钉钉机器人发送消息
   * @param message
   * message to be sent
   */
  robotSend(message: string) {
    post({
      path: this.RobotURL,
      data: {
        msgtype: 'text',
        text: {
          content: message,
        },
      },
    });
  }
}
