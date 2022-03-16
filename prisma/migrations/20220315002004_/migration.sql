-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN DEFAULT true,
    "authorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" TEXT NOT NULL,
    "adminIds" JSONB NOT NULL,
    "characterIds" JSONB NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "abilityScores" JSONB NOT NULL,
    "armorClass" JSONB NOT NULL,
    "movementSpeed" JSONB NOT NULL,
    "initiative" JSONB NOT NULL,
    "proficiencyBonus" JSONB NOT NULL,
    "savingThrows" JSONB NOT NULL,
    "skills" JSONB NOT NULL,
    "conditions" JSONB NOT NULL,
    "race" JSONB NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "attacks" JSONB NOT NULL,
    "abilityScoreModifiers" JSONB NOT NULL,
    "armorClassModifiers" JSONB NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbilityScoreModifier" (
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ArmorClassModifier" (
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "MovementSpeedModifier" (
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "InitiativeModifier" (
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ProficiencyBonusModifier" (
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SavingThrows" (
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "name" TEXT NOT NULL,
    "proficiencyBonusModifiers" JSONB NOT NULL,
    "abilityScoreModifiers" JSONB NOT NULL,
    "total" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Race" (
    "name" TEXT NOT NULL,
    "abilityScoreModifiers" JSONB NOT NULL,
    "proficiencies" JSONB NOT NULL,
    "features" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "Class" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Feature" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Attack" (
    "name" TEXT NOT NULL,
    "damgage" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Proficiency" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Inventory" (
    "playerId" TEXT NOT NULL,
    "netWorth" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "items" JSONB NOT NULL,
    "coinPouch" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "Container" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "items" JSONB NOT NULL,
    "netWorth" INTEGER NOT NULL,

    CONSTRAINT "Container_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona" (
    "characterId" TEXT NOT NULL,
    "bonds" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "personalityTraits" TEXT NOT NULL,
    "ideals" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "flaws" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "languages" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_id_key" ON "Campaign"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AbilityScoreModifier_name_key" ON "AbilityScoreModifier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ArmorClassModifier_name_key" ON "ArmorClassModifier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MovementSpeedModifier_name_key" ON "MovementSpeedModifier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "InitiativeModifier_name_key" ON "InitiativeModifier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProficiencyBonusModifier_name_key" ON "ProficiencyBonusModifier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SavingThrows_name_key" ON "SavingThrows"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Race_name_key" ON "Race"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_key" ON "Class"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Feature_name_key" ON "Feature"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Attack_name_key" ON "Attack"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Proficiency_name_key" ON "Proficiency"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_playerId_key" ON "Inventory"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Container_id_key" ON "Container"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_characterId_key" ON "Persona"("characterId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
