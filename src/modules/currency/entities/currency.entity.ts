import { BaseEntity } from '@app/common';
import { StoryEntity } from 'src/modules/story/entities/story.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'currencies' })
export class CurrencyEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  code: string;

  @Column({ type: 'varchar', length: 255 })
  symbol: string;

  @OneToMany(() => StoryEntity, (story) => story.currency, {
    onDelete: 'CASCADE',
  })
  stories: StoryEntity[];
}
