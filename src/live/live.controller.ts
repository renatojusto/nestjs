import { Controller, Get, Post, Body, Delete, Render } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Live } from './live.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLiveDTO } from './dto/create-live.dto';

@Controller()
export class LiveController {

  constructor(@InjectRepository(Live) private liveRepository: Repository<Live>) {
  }

  @Get('live')
  findLives() {
    return this.liveRepository.find();
  }

  @Post('live')
  async createLive(@Body() createsLiveDTO: CreateLiveDTO[]) {
    var values = [];
    for (let createLiveDTO of createsLiveDTO) {
      const live = await this.liveRepository.create(createLiveDTO);
      values.push(await this.liveRepository.save(live));
    }
    return values;
  }

  @Delete('live')
  async deleteLives() {
    await this.liveRepository.clear();
  }

  @Get('maratona')
  @Render('live_list')
  async live_list() {
    const lives = await this.liveRepository.find();
    return {layout: false, lives};
  }

}
