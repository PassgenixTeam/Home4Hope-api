import { Injectable } from '@nestjs/common';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { OrgEntity } from 'src/modules/org/entities/org.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { removeKeyUndefined } from '@app/common';
import { ORG_STATUS } from 'src/modules/org/enums/org.enum';

@Injectable()
export class OrgService {
  constructor(
    @InjectRepository(OrgEntity)
    private readonly orgRepository: Repository<OrgEntity>,
  ) {}
  create(createOrgDto: CreateOrgDto) {
    const orgInstance = plainToInstance(OrgEntity, createOrgDto);

    orgInstance.status = ORG_STATUS.PENDING;

    return this.orgRepository.save(orgInstance);
  }

  findAll() {
    return this.orgRepository.createQueryBuilder('org').getMany();
  }

  findOne(id: string) {
    return this.orgRepository.findOne({
      where: { id },
    });
  }

  async update(id: string, updateOrgDto: UpdateOrgDto) {
    const org = await this.orgRepository.findOne({
      where: { id },
    });

    const orgInstance = plainToInstance(OrgEntity, updateOrgDto);
    removeKeyUndefined(orgInstance);

    return this.orgRepository.save(orgInstance);
  }

  remove(id: string) {
    return this.orgRepository
      .createQueryBuilder('org')
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
