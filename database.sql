-- Skema SQL opsional jika leaderboard memakai MySQL/PostgreSQL, bukan Google Sheets.
CREATE TABLE leaderboard_entries (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  student_name VARCHAR(70) NOT NULL,
  whatsapp VARCHAR(16) NOT NULL,
  score INT NOT NULL DEFAULT 0,
  completed_level SMALLINT NOT NULL DEFAULT 0,
  quiz_answers JSON NOT NULL,
  played_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT valid_whatsapp CHECK (whatsapp LIKE '+62%'),
  CONSTRAINT valid_level CHECK (completed_level BETWEEN 0 AND 10)
);
CREATE INDEX leaderboard_score_idx ON leaderboard_entries (score DESC, played_at ASC);
