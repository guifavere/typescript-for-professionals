abstract class Command {
  abstract commandLine(): string;

  execute() {
    console.log('Executing:', this.commandLine());
  }
}

class GitResetCommand extends Command {
  commandLine() {
    return 'git reset --hard';
  }
}

class GitFetchCommand extends Command {
  commandLine() {
    return 'git fetch --all';
  }
}
