import { BaseEntity } from '@app/common';
import { StoryEntity } from 'src/modules/story/entities/story.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'donate' })
export class DonateEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column({ type: 'float' })
  amount: number;

  @Column({ type: 'varchar', length: 255 })
  message: string;

  @Column({ type: 'uuid', name: 'story_id' })
  storyId: string;

  @ManyToOne(() => StoryEntity, (story) => story.donates, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'story_id' })
  story: StoryEntity;
}
